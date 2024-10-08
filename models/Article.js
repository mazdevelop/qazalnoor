import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  title: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  content: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  author: { type: String, required: true },
  tags: [String],
  images: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Article=mongoose.models.Article || mongoose.model('Article', ArticleSchema);

export default Article;