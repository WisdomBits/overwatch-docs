export default function robots() {
    return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://docs.overwatchts.in/sitemap.xml',
  }
}