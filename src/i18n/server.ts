import { cache } from 'react'
import { createTranslator } from 'use-intl/core'
import { routing } from './routing'

type Locale = (typeof routing.locales)[number]
type Messages = Record<string, unknown>
type Translator = (key: string, values?: Record<string, unknown>) => string

const messageLoaders: Record<Locale, () => Promise<Messages>> = {
  sq: () => import('./messages/sq.json').then((module) => module.default as Messages),
  de: () => import('./messages/de.json').then((module) => module.default as Messages),
  fr: () => import('./messages/fr.json').then((module) => module.default as Messages),
  it: () => import('./messages/it.json').then((module) => module.default as Messages),
  en: () => import('./messages/en.json').then((module) => module.default as Messages),
}

function normalizeLocale(locale?: string): Locale {
  if (locale && routing.locales.includes(locale as Locale)) {
    return locale as Locale
  }

  return routing.defaultLocale
}

const loadMessages = cache(async (locale: Locale) => messageLoaders[locale]())

export async function getMessages({ locale }: { locale?: string }) {
  return loadMessages(normalizeLocale(locale))
}

export async function getTranslations({
  locale,
  namespace,
}: {
  locale?: string
  namespace?: string
}): Promise<Translator> {
  const normalizedLocale = normalizeLocale(locale)
  const messages = await loadMessages(normalizedLocale)

  return createTranslator({
    locale: normalizedLocale,
    messages,
    namespace,
  }) as unknown as Translator
}
