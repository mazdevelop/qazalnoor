import { useState, useEffect } from 'react'
import { getProducts } from '../lib/api'
import { useTranslations } from '../hooks/useTranslations'

export default function ProductPreview({ count = 4 }) {
  const [products, setProducts] = useState([])
  const { t, lang } = useTranslations()

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts()
      setProducts(data.slice(0, count))
    }
    fetchProducts()
  }, [count])

  return (
    <div className="product-preview">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title[lang]} />
          <h3>{product.title[lang]}</h3>
          <p>{product.description[lang]}</p>
          <button>{t('buyNow')}</button>
        </div>
      ))}
    </div>
  )
}