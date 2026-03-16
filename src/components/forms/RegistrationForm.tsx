'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function RegistrationForm() {
  const t = useTranslations('register')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/community-registrations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          address: {
            street: formData.get('street'),
            city: formData.get('city'),
            canton: formData.get('canton'),
            postalCode: formData.get('postalCode'),
          },
          dateOfBirth: formData.get('dateOfBirth') || undefined,
          nationality: formData.get('nationality'),
          membershipType: formData.get('membershipType'),
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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">{t('first_name')} *</label>
          <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">{t('last_name')} *</label>
          <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">{t('email')} *</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">{t('phone')}</label>
        <input type="tel" id="phone" name="phone" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="street" className="block text-sm font-medium mb-1">{t('street')}</label>
          <input type="text" id="street" name="street" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">{t('city')}</label>
          <input type="text" id="city" name="city" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="canton" className="block text-sm font-medium mb-1">{t('canton')}</label>
          <input type="text" id="canton" name="canton" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium mb-1">{t('postal_code')}</label>
          <input type="text" id="postalCode" name="postalCode" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">{t('date_of_birth')}</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label htmlFor="nationality" className="block text-sm font-medium mb-1">{t('nationality')}</label>
          <input type="text" id="nationality" name="nationality" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
        </div>
      </div>

      <div>
        <label htmlFor="membershipType" className="block text-sm font-medium mb-1">{t('membership_type')}</label>
        <select id="membershipType" name="membershipType" className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition">
          <option value="individual">{t('individual')}</option>
          <option value="family">{t('family')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">{t('message')}</label>
        <textarea id="message" name="message" rows={3} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none" />
      </div>

      {status === 'error' && (
        <p className="text-accent text-sm">{t('error')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? '...' : t('submit')}
      </button>
    </form>
  )
}
