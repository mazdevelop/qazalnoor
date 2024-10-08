'use client'

import { useTranslations } from '../../hooks/useTranslations'

export default function LanguageSelector() {
  const { changeLanguage, currentLanguage } = useTranslations()

  return (
    <select value={currentLanguage} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="fa">فارسی</option>
      <option value="en">English</option>
    </select>
  )
}