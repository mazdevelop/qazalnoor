import { useTranslation } from 'react-i18next'

export function useTranslations() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return { t, changeLanguage, currentLanguage: i18n.language }
}