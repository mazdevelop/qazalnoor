import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
})

// ترجمه‌ها
export const getTranslations = (lang) => api.get(`/translations/${lang}`)
export const updateTranslation = (lang, data) => api.post(`/translations/${lang}`, data)

// صفحه اصلی
export const getHomePageData = () => api.get('/home')
export const updateHomePageData = (data) => api.post('/home', data)

// محصولات
export const getProducts = () => api.get('/products')
export const getProduct = (id) => api.get(`/products/${id}`)
export const createProduct = (data) => api.post('/products', data)
export const updateProduct = (id, data) => api.put(`/products/${id}`, data)
export const deleteProduct = (id) => api.delete(`/products/${id}`)
export const toggleProductPublish = (id) => api.patch(`/products/${id}/toggle-publish`)

// مقالات
export const getArticles = () => api.get('/articles')
export const getArticle = (id) => api.get(`/articles/${id}`)
export const createArticle = (data) => api.post('/articles', data)
export const updateArticle = (id, data) => api.put(`/articles/${id}`, data)
export const deleteArticle = (id) => api.delete(`/articles/${id}`)
export const toggleArticlePublish = (id) => api.patch(`/articles/${id}/toggle-publish`)

// صفحه درباره ما
export const getAboutPageData = () => api.get('/about')
export const updateAboutPageData = (data) => api.post('/about', data)

// گزارش‌ها
export const getVisitReports = () => api.get('/reports/visits')