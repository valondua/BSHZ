'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export function NewsletterForm() {
  const t = useTranslations('newsletter')
  const locale = useLocale()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/newsletter-subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          locale,
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-green-800 font-semibold">{t('success')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">{t('email')} *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">{t('first_name')}</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">{t('last_name')}</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-accent text-sm">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : t('subscribe')}
      </button>
    </form>
  )
}
