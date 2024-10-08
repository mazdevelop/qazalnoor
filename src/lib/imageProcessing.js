import sharp from 'sharp'

export async function optimizeImage(buffer) {
  return sharp(buffer)
    .resize(800) // تغییر اندازه به حداکثر عرض 800 پیکسل
    .webp({ quality: 80 }) // تبدیل به فرمت WebP با کیفیت 80%
    .toBuffer()
}