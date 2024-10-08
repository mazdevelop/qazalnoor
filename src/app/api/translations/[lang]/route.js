import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET(request, { params }) {
  const lang = params.lang
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', lang, 'translation.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const translations = JSON.parse(fileContent)
    return NextResponse.json(translations)
  } catch (error) {
    console.error('Error reading translation file:', error)
    return NextResponse.json({ error: 'Failed to fetch translations' }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  const lang = params.lang
  const data = await request.json()
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', lang, 'translation.json')
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error writing translation file:', error)
    return NextResponse.json({ error: 'Failed to update translations' }, { status: 500 })
  }
}