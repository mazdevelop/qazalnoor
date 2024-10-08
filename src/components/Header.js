import Link from 'next/link'
import LanguageSelector from './ui/LanguageSelector'
import { useTranslations } from '../hooks/useTranslations'

export default function Header() {
  const { t, currentLanguage } = useTranslations()

  return (
    <header>
      <nav>
        <Link href={`/${currentLanguage}`}>{t('home')}</Link>
        <Link href={`/${currentLanguage}/products`}>{t('products')}</Link>
        <Link href={`/${currentLanguage}/articles`}>{t('articles')}</Link>
        <Link href={`/${currentLanguage}/about`}>{t('about')}</Link>
        <Link href={`/${currentLanguage}/contact`}>{t('contact')}</Link>
      </nav>
      <LanguageSelector />
    </header>
  )
}