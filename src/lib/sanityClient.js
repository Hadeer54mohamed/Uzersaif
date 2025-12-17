import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'wp7r4jjb', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01', // استخدم إصدار مستقر
})

const builder = imageUrlBuilder(client)  // هنا عرفنا builder

export const urlFor = (source) => builder.image(source)  // وبعدين استخدمناه
