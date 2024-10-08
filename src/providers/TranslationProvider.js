'use client'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('../../public/locales/en/translation.json')
      },
      fa: {
        translation: require('../../public/locales/fa/translation.json')
      }
    },
    lng: "fa",
    fallbackLng: "fa",
    interpolation: {
      escapeValue: false
    }
  });

export default function TranslationProvider({ children }) {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}