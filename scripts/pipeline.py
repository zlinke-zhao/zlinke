#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ZLinke 内容发布工具

不再自动生成文章内容（已废弃模板生成方式）。
现在只负责：
  1. 检查 content/articles/ 目录的新增/修改文件
  2. 提交并推送到 GitHub，触发 Vercel 自动部署

使用方式:
  python pipeline.py              # 提交并推送所有未推送的文章
  python pipeline.py --push       # 同上，显式指定
"""

import os
import sys
import re
import subprocess
from datetime import datetime, timezone, timedelta
from pathlib import Path

# Windows下强制UTF-8输出
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

# 时区：中国时间 UTC+8
CST = timezone(timedelta(hours=8))

# 项目路径
PROJECT_DIR = Path(__file__).parent.parent
CONTENT_DIR = PROJECT_DIR / "content" / "articles"


def push_to_github():
    """检查新文章并推送到GitHub，触发Vercel自动部署"""
    try:
        # 检查是否有变更
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            cwd=str(PROJECT_DIR),
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
        )

        if not result.stdout or not result.stdout.strip():
            print("  ℹ️ 没有新内容需要推送")
            return False

        # 添加所有新文章和修改
        subprocess.run(["git", "add", "-A"], cwd=str(PROJECT_DIR), check=True)

        # 提交
        today = datetime.now(CST).strftime("%Y-%m-%d %H:%M")
        # 统计变更文件
        changed_files = [line.strip() for line in result.stdout.strip().split('\n') if line.strip()]
        file_count = len(changed_files)
        commit_msg = f"content: update {today} ({file_count} files)"
        subprocess.run(["git", "commit", "-m", commit_msg], cwd=str(PROJECT_DIR), check=True)

        # 推送
        subprocess.run(["git", "push", "origin", "main"], cwd=str(PROJECT_DIR), check=True)

        print(f"  🚀 推送成功！共 {file_count} 个文件变更")
        print(f"  🌐 预计1-2分钟后 Vercel 自动部署")
        return True

    except subprocess.CalledProcessError as e:
        print(f"  ❌ Git操作失败: {e}")
        return False


def run_pipeline():
    """执行发布流程"""
    print("=" * 60)
    print(f"📤 ZLinke 内容发布工具")
    print(f"📅 {datetime.now(CST).strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    print("\n📋 检查变更...")
    success = push_to_github()

    print("\n" + "=" * 60)
    if success:
        print(f"✅ 发布完成！")
    else:
        print(f"ℹ️  无变更或推送失败")
    print("=" * 60)


if __name__ == "__main__":
    run_pipeline()
