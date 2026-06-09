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
          className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
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
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
      {submitted ? (
        <div>
          <div className="text-3xl mb-3">✉️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">订阅成功！</h3>
          <p className="text-sm text-gray-500">每日AI精选资讯将发送到你的邮箱</p>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold text-gray-800 mb-2">订阅AI科技日报</h3>
          <p className="text-sm text-gray-500 mb-5">每日精选AI资讯 + 工具推荐，直达邮箱</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="输入你的邮箱"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="gradient-bg text-white px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              免费订阅
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-3">零垃圾邮件承诺，随时退订</p>
        </>
      )}
    </div>
  )
}
