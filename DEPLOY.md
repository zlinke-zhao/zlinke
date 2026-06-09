# ZLinke 部署指南

## 从代码到上线的完整步骤

### 前提条件
- GitHub 账号（github.com）
- Vercel 账号（vercel.com，可用GitHub登录）
- 域名 zlinke.top 的DNS管理权限

---

## 第一步：代码推送到GitHub

```bash
# 进入项目目录
cd zlinke

# 初始化Git仓库
git init
git add .
git commit -m "init: ZLinke AI工具评测站"

# 在GitHub上创建仓库后：
git remote add origin https://github.com/你的用户名/zlinke.git
git branch -M main
git push -u origin main
```

---

## 第二步：Vercel部署

1. 访问 vercel.com，用GitHub登录
2. 点击 "Add New Project"
3. 选择 zlinke 仓库
4. 配置项保持默认（Framework Preset: Next.js）
5. 点击 "Deploy"
6. 等待2-3分钟，部署完成！

部署后你会得到一个临时域名：zlinke.vercel.app

---

## 第三步：绑定域名 zlinke.top

### 3.1 在Vercel中添加域名

1. 进入项目 Settings → Domains
2. 输入 zlinke.top，点击 Add
3. 同时添加 www.zlinke.top

### 3.2 配置DNS解析

在你的域名管理面板（购买zlinke.top的地方）添加以下DNS记录：

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | @ | cname.vercel-dns.com |
| CNAME | www | cname.vercel-dns.com |

### 3.3 等待DNS生效

- 通常5-30分钟生效
- 最长48小时（极少情况）
- Vercel会自动申请SSL证书

---

## 第四步：验证上线

访问 https://zlinke.top，确认：
- [ ] 首页正常显示
- [ ] 文章列表页可访问
- [ ] 文章详情页可访问
- [ ] 工具库页可访问
- [ ] 手机端显示正常
- [ ] SSL证书生效（HTTPS）

---

## 后续：内容更新流程

### 手动更新
1. 在 content/articles/ 添加新Markdown文件
2. git add . && git commit -m "新文章" && git push
3. Vercel自动构建部署（约2分钟）

### 自动更新（后续接入）
- 使用GitHub Actions定时触发
- AI自动生成内容 → 自动commit → Vercel自动部署
- 无需任何手动操作

---

## 接入AdSense（流量起来后）

1. 访问 google.com/adsense 注册
2. 添加网站 zlinke.top
3. Google审核通过后获取广告代码
4. 替换 AdSlot 组件中的占位内容

---

## 接入联盟营销

1. 注册联盟平台（Amazon Associates / CJ / ShareASale）
2. 获取各工具的联盟链接
3. 替换 lib/tools.ts 中的 #affiliate-xxx 为真实链接
4. 替换文章中 affiliates 的 url 为真实链接

---

## 成本总览

| 项目 | 费用 |
|------|------|
| Vercel托管 | $0（免费层） |
| Cloudflare CDN | $0（免费） |
| 域名 zlinke.top | ~¥8/年 |
| AdSense | $0（分成模式） |
| **合计** | **~¥8/年** |
