import dbConnect from '../utils/dbConnect';
import Product from '../../models/Product'; 

export async function createProduct(productData) {
    await dbConnect();
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      console.error('خطا در ایجاد محصول:', error);
      throw error;
    }
  }
export async function getProduct(id) {
  await dbConnect();
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error('محصول یافت نشد');
    }
    return product;
  } catch (error) {
    console.error('خطا در دریافت محصول:', error);
    throw error;
  }
}

export async function updateProduct(id, updateData) {
  await dbConnect();
  try {
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!product) {
      throw new Error('محصول یافت نشد');
    }
    return product;
  } catch (error) {
    console.error('خطا در به‌روزرسانی محصول:', error);
    throw error;
  }
}

export async function deleteProduct(id) {
  await dbConnect();
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      throw new Error('محصول یافت نشد');
    }
    return product;
  } catch (error) {
    console.error('خطا در حذف محصول:', error);
    throw error;
  }
}

export default {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
};