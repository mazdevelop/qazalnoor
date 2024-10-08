'use client'

import { useSession } from 'next-auth/react'
import { useTranslations } from '../../../hooks/useTranslations'

export default function Dashboard() {
  const { data: session } = useSession()
  const { t } = useTranslations()

  if (!session) {
    return <div>{t('loading')}</div>
  }

  return (
    <div>
      <h1>{t('dashboard')}</h1>
      <p>{t('welcome')} {session.user.name}</p>
      {/* لینک‌ها و محتوای داشبورد */}
    </div>
  )
}