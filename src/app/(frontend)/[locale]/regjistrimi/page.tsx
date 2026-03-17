import { getTranslations } from '@/i18n/server'
import { RegistrationForm } from '@/components/forms/RegistrationForm'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('register_title') }
}

export default async function RegistrationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'register' })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
        <p className="text-text-light mb-10">{t('description')}</p>
        <RegistrationForm />
      </div>
    </div>
  )
}
