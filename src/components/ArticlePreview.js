import { useState, useEffect } from 'react'
import { getArticles } from '../lib/api'
import { useTranslations } from '../hooks/useTranslations'

export default function ArticlePreview({ count = 4 }) {
  const [articles, setArticles] = useState([])
  const { t, lang } = useTranslations()

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await getArticles()
      setArticles(data.slice(0, count))
    }
    fetchArticles()
  }, [count])

  return (
    <div className="article-preview">
      {articles.map((article) => (
        <div key={article.id} className="article-card">
          <img src={article.image} alt={article.title[lang]} />
          <h3>{article.title[lang]}</h3>
          <p>{article.summary[lang]}</p>
          <button>{t('readMore')}</button>
        </div>
      ))}
    </div>
  )
}