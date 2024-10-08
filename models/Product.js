import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  description: {
    fa: { type: String, required: true },
    en: { type: String, required: true },
  },
  price: { type: Number, required: true },
  images: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})
const Product= mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;

