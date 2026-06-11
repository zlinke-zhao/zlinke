'use client'

import { useState } from 'react'

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 接入Beehiiv/ConvertKit/Substack API
    setSubmitted(true)
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="输入邮箱"
          required
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 dark:bg-gray-700 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          订阅
        </button>
      </form>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 md:p-10 text-center border border-blue-100 dark:border-blue-900/50">
      {submitted ? (
        <div>
          <div className="text-3xl mb-3">✉️</div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">订阅成功！</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">每日AI精选资讯将发送到你的邮箱</p>
        </div>
      ) : (
        <>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-blue-300 text-xs font-semibold mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            免费订阅
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">订阅AI科技日报</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">每日精选AI资讯 + 工具推荐，直达邮箱</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="输入你的邮箱"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="gradient-bg text-white px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              免费订阅
            </button>
          </form>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">零垃圾邮件承诺，随时退订</p>
        </>
      )}
    </div>
  )
}
