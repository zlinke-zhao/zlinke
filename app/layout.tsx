import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'ZLinke 智链 - 发现最好的AI工具',
    template: '%s | ZLinke 智链',
  },
  description: 'ZLinke智链 - 你的AI工具发现站。深度评测AI工具，推荐最佳选择，助你在AI时代领先一步。',
  keywords: ['AI工具', 'AI评测', 'ChatGPT', 'Claude', 'AI写作', 'AI编程', '工具推荐'],
  openGraph: {
    title: 'ZLinke 智链 - 发现最好的AI工具',
    description: '深度评测AI工具，推荐最佳选择',
    url: 'https://zlinke.top',
    siteName: 'ZLinke',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1019611632171859"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
