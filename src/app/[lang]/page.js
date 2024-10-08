import { useTranslations } from '../../hooks/useTranslations'
import Slider from '../../components/Slider'
import ProductPreview from '../../components/ProductPreview'
import ArticlePreview from '../../components/ArticlePreview'

export default function Home() {
  const { t } = useTranslations()

  return (
    <main>
      <h1>{t('welcome')}</h1>
      <Slider />
      <section>
        <h2>{t('featuredProducts')}</h2>
        <ProductPreview count={4} />
      </section>
      <section>
        <h2>{t('latestArticles')}</h2>
        <ArticlePreview count={4} />
      </section>
    </main>
  )
}