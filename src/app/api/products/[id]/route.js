import { NextResponse } from 'next/server'
import { getProduct, updateProduct, deleteProduct } from '../../../../services/productService'

export async function GET(request, { params }) {
  const product = await getProduct(params.id)
  return NextResponse.json(product)
}

export async function PUT(request, { params }) {
  const data = await request.json()
  const updatedProduct = await updateProduct(params.id, data)
  return NextResponse.json(updatedProduct)
}

export async function DELETE(request, { params }) {
  await deleteProduct(params.id)
  return NextResponse.json({ success: true })
}