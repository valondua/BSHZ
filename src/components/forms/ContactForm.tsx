'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contact-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">{t('name')} *</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
      </div>
      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">{t('email')} *</label>
        <input type="email" id="contactEmail" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">{t('subject')} *</label>
        <input type="text" id="subject" name="subject" required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
      </div>
      <div>
        <label htmlFor="contactMessage" className="block text-sm font-medium mb-1">{t('message')} *</label>
        <textarea id="contactMessage" name="message" rows={5} required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none" />
      </div>

      {status === 'error' && (
        <p className="text-accent text-sm">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : t('send')}
      </button>
    </form>
  )
}
