import { NextResponse } from 'next/server'
import { getProducts, createProduct } from '../../../services/productService' 

export async function GET() {
  const products = await getProducts()
  return NextResponse.json(products)
}

export async function POST(request) {
  const data = await request.json()
  const newProduct = await createProduct(data)
  return NextResponse.json(newProduct)
}