#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ZLinke URL安全检测工具 v1.0
用于在添加新AI工具前进行安全验证：
1. URL可达性检测
2. HTTPS强制检查
3. 域名信誉基础检测
4. 内容真实性验证
5. 恶意特征模式匹配

输出: JSON格式的检测报告
用法: python url_safety_check.py <url> [--verbose]
"""

import sys
import json
import re
import socket
import ssl
import urllib.request
import urllib.error
from datetime import datetime
from urllib.parse import urlparse

# ============================================================
# 高危域名特征库（持续更新）
# ============================================================

SUSPICIOUS_TLD = {
    '.tk', '.ml', '.ga', '.cf', '.gq',   # 免费顶级域，常被滥用
    '.xyz', '.top', '.club', '.wang',      # 高风险TLD
    '.cyou', '.icu', '.rest', '.hair',     # 廉价TLD
    '.buzz', '.live', '.shop', '.site',    # 常被用于钓鱼
}

# 已知恶意域名/仿冒域名模式
SUSPICIOUS_DOMAIN_PATTERNS = [
    r'chatgpt.*\.(tk|ml|ga|cf|gq|xyz)$',
    r'claude.*\.(tk|ml|ga|cf|gq|xyz)$',
    r'openai(?!\.com).*',
    r'midjourney(?!\.com).*',
    r'google.*ai.*\.(tk|ml|ga|cf|gq|xyz)$',
    r'free.*ai.*tool.*\.(xyz|top|club)$',
    r'win.*prize.*\.(xyz|top)$',
    r'.*-download.*\.(xyz|top|site)$',
]

# 已知安全的AI工具域名（白名单-快速放行）
KNOWN_SAFE_DOMAINS = {
    'openai.com', 'chat.openai.com', 'chatgpt.com',
    'anthropic.com', 'claude.ai',
    'google.com', 'gemini.google.com',
    'cursor.sh', 'github.com',
    'codeium.com', 'replit.com',
    'midjourney.com', 'stability.ai', 'leonardo.ai',
    'runwayml.com', 'pika.art', 'heygen.com',
    'notion.so', 'jasper.ai', 'grammarly.com',
    'canva.com', 'gamma.app', 'otter.ai',
    'perplexity.ai', 'devv.ai', 'metaso.cn',
    'suno.com', 'elevenlabs.io',
    'kimi.moonshot.cn', 'doubao.com', 'coze.com',
    'moonshot.cn', 'xiezuocat.com', 'xfyun.cn',
}

def get_ip_from_url(url):
    """获取域名对应的IP"""
    try:
        hostname = urlparse(url).hostname
        if not hostname:
            return None
        return socket.gethostbyname(hostname)
    except:
        return None

def check_https(url):
    """检查是否使用HTTPS"""
    parsed = urlparse(url)
    return parsed.scheme == 'https'

def check_ssl_cert(hostname, timeout=5):
    """检查SSL证书有效性"""
    try:
        context = ssl.create_default_context()
        with socket.create_connection((hostname, 443), timeout=timeout) as sock:
            with context.wrap_socket(sock, server_hostname=hostname) as ssock:
                cert = ssock.getpeercert()
                not_after = cert.get('notAfter', '')
                # 检查证书是否过期
                if not_after:
                    expiry = datetime.strptime(not_after, '%b %d %H:%M:%S %Y %Z')
                    days_left = (expiry - datetime.now()).days
                try:
                    issuer_dict = dict(cert.get('issuer', []))
                    issuer = issuer_dict.get('organizationName', 'Unknown')
                except:
                    issuer = 'Unknown'
                return {
                    'valid': True,
                    'days_left': days_left,
                    'issuer': issuer
                }
        return {'valid': True, 'days_left': None, 'issuer': None}
    except ssl.CertificateError as e:
        return {'valid': False, 'error': str(e)[:200]}
    except Exception as e:
        return {'valid': False, 'error': str(e)[:200]}

def check_url_reachable(url, timeout=8):
    """检查URL是否可达"""
    try:
        req = urllib.request.Request(
            url,
            headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ZLinke-SafetyCheck/1.0',
                'Accept': 'text/html,application/xhtml+xml',
            }
        )
        resp = urllib.request.urlopen(req, timeout=timeout)
        status = resp.getcode()
        # 读取前5000字符用于内容分析
        raw_data = resp.read(5000)
        content_type = resp.headers.get('Content-Type', '')
        final_url = resp.geturl()

        return {
            'reachable': True,
            'status': status,
            'content_type': content_type[:100],
            'final_url': final_url,
            'redirected': final_url != url,
            'body_preview': raw_data.decode('utf-8', errors='ignore')[:3000],
        }
    except urllib.error.HTTPError as e:
        return {'reachable': False, 'error': f'HTTP {e.code}: {e.reason}'}
    except urllib.error.URLError as e:
        return {'reachable': False, 'error': f'URL Error: {str(e.reason)[:200]}'}
    except Exception as e:
        return {'reachable': False, 'error': f'Exception: {str(e)[:200]}'}

def check_domain_suspicious(url):
    """检查域名是否可疑"""
    parsed = urlparse(url)
    hostname = parsed.hostname or ''
    domain = hostname.lower()

    warnings = []

    # 检查TLD
    for tld in SUSPICIOUS_TLD:
        if domain.endswith(tld):
            warnings.append(f'高风险TLD: {tld}')

    # 检查已知恶意模式
    for pattern in SUSPICIOUS_DOMAIN_PATTERNS:
        if re.search(pattern, domain):
            warnings.append(f'匹配恶意特征: {pattern}')

    # 检查是否使用IP直接访问
    if re.match(r'^\d+\.\d+\.\d+\.\d+$', hostname):
        warnings.append('直接使用IP地址访问，非正常域名')

    # 检查域名中是否包含多个连字符（常见于垃圾域名）
    if domain.count('-') > 3:
        warnings.append('域名含过多连字符')

    # 检查是否为长随机字符串域名
    random_pattern = re.search(r'[a-z0-9]{20,}', domain)
    if random_pattern:
        warnings.append('域名含超长随机字符串')

    # 检查是否为新注册域名（基于TLD启发式）
    # 注：完整检查需要WHOIS API，此处为基础检查

    return warnings

def check_content_authenticity(body_preview):
    """检查页面内容是否像真实的AI工具网站"""
    if not body_preview:
        return {'score': 0, 'signals': ['无法获取页面内容']}

    signals = []
    score = 0
    body_lower = body_preview.lower()

    # 正信号
    ai_keywords = ['ai', 'artificial intelligence', 'machine learning', 'deep learning',
                   'gpt', 'llm', 'language model', 'transformer', 'neural network',
                   '人工智能', '大模型', '深度学习', '神经网络']
    for kw in ai_keywords:
        if kw in body_lower:
            score += 3
            signals.append(f'内容含AI关键词: {kw}')
            break  # 只计一次

    # 正信号：有清晰的标题
    if re.search(r'<title>.*?</title>', body_preview, re.IGNORECASE):
        score += 2
        signals.append('含页面标题')

    # 负信号：检测恶意内容特征
    malicious_patterns = [
        (r'(hack|crack|keygen|warez|torrent|pirate)', 10, '含恶意关键词'),
        (r'(phish|phishing|scam|fraud)', 15, '含欺诈关键词'),
        (r'(porn|xxx|adult|sex)', 15, '含成人内容关键词'),
        (r'(casino|gambling|poker|slot)', 10, '含赌博关键词'),
        (r'(crypto.*(?:win|bonus|reward|free|airdrop))', 8, '含加密空投/奖励关键词'),
        (r'<script[^>]*src=["\'].*?\.(tk|ml|ga|cf)[^"\']*["\']', 15, '引用了高风险TLD脚本'),
        (r'(redirect|forward).*?window\.location', 5, '疑似重定向脚本'),
    ]

    for pattern, penalty, desc in malicious_patterns:
        if re.search(pattern, body_lower, re.IGNORECASE):
            score -= penalty
            signals.append(f'[危险] {desc}')

    # 负信号：页面内容极少
    if len(body_preview) < 200:
        score -= 10
        signals.append('页面内容极少，可能为占位页')

    # 负信号：只有JS没有实质内容
    if len(re.sub(r'<script[^>]*>.*?</script>', '', body_preview, flags=re.DOTALL | re.IGNORECASE).strip()) < 100:
        score -= 5
        signals.append('页面几乎全是JS，无实质内容')

    return {'score': score, 'signals': signals}

def check_safety(url, verbose=False):
    """综合安全检查入口"""
    result = {
        'url': url,
        'checked_at': datetime.now().isoformat(),
        'safe': True,
        'risk_level': 'unknown',
        'checks': {},
        'warnings': [],
        'errors': [],
    }

    parsed = urlparse(url)
    hostname = parsed.hostname or ''

    # 1. HTTPS检查
    https_ok = check_https(url)
    result['checks']['https'] = https_ok
    if not https_ok:
        result['warnings'].append('未使用HTTPS加密')
        result['risk_level'] = 'high'

    # 2. SSL证书检查
    if https_ok:
        ssl_result = check_ssl_cert(hostname)
        result['checks']['ssl'] = ssl_result
        if not ssl_result['valid']:
            result['warnings'].append(f'SSL证书无效: {ssl_result.get("error", "unknown")}')
            result['risk_level'] = 'high'

    # 3. 域名信誉检查
    domain_warnings = check_domain_suspicious(url)
    result['checks']['domain'] = {'warnings': domain_warnings}
    result['warnings'].extend(domain_warnings)
    if domain_warnings:
        if result['risk_level'] not in ('high',):
            result['risk_level'] = 'medium'

    # 4. 白名单快速通道
    if hostname in KNOWN_SAFE_DOMAINS:
        result['risk_level'] = 'safe'
        result['checks']['whitelist'] = True
        result['safe'] = True
        return result

    # 5. URL可达性 + 内容真实性
    reachability = check_url_reachable(url)
    result['checks']['reachability'] = {
        'reachable': reachability['reachable'],
        'status': reachability.get('status'),
    }
    if not reachability['reachable']:
        result['warnings'].append(f'URL不可达: {reachability.get("error", "unknown")}')
        result['risk_level'] = 'high'
        result['safe'] = False
    else:
        # 6. 内容真实性分析
        body = reachability.get('body_preview', '')
        content_check = check_content_authenticity(body)
        result['checks']['content'] = content_check
        if content_check['score'] < -5:
            result['warnings'].append(f'内容真实性评分过低: {content_check["score"]}')
            result['risk_level'] = 'high'
            result['safe'] = False
        elif content_check['score'] < 0:
            result['warnings'].append(f'内容真实性评分偏低: {content_check["score"]}')
            if result['risk_level'] not in ('high',):
                result['risk_level'] = 'medium'

    # 7. 综合判断
    if result['risk_level'] == 'unknown':
        result['risk_level'] = 'low'
    if result['risk_level'] == 'high':
        result['safe'] = False
    elif result['risk_level'] == 'medium':
        # 中风险需要人工确认
        result['safe'] = False

    if verbose:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        # 简洁输出
        summary = {
            'url': url,
            'safe': result['safe'],
            'risk_level': result['risk_level'],
            'warnings': result['warnings'],
        }
        print(json.dumps(summary, ensure_ascii=False))

    return result

if __name__ == '__main__':
    import sys
    # Fix encoding on Windows
    if sys.platform == 'win32':
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
        sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

    verbose = '--verbose' in sys.argv or '-v' in sys.argv
    if len(sys.argv) < 2:
        print(json.dumps({'error': '请提供URL参数'}, ensure_ascii=False))
        sys.exit(1)

    url = sys.argv[1]
    result = check_safety(url, verbose=verbose)
    # Ensure output is flushed
    sys.stdout.flush()
