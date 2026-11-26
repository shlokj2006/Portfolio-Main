import { useEffect } from 'react'

const SITE_URL = 'https://shlokjaiswal.vercel.app'
const DEFAULT_TITLE = 'Shlok Jaiswal | Full-Stack Developer & AI Automation Enthusiast'
const DEFAULT_DESCRIPTION = 'Portfolio of Shlok Jaiswal, a Computer Science student building full-stack web applications and AI-assisted automation workflows.'
const SOCIAL_IMAGE = `${SITE_URL}/social-image.jpg`

function setMeta(attribute, key, content) {
  const selector = `meta[${attribute}="${key}"]`
  const matches = [...document.head.querySelectorAll(selector)]
  const element = matches.shift() ?? document.createElement('meta')
  for (const duplicate of matches) duplicate.remove()
  element.setAttribute(attribute, key)
  element.setAttribute('content', content)
  if (!element.isConnected) document.head.appendChild(element)
}

function SEO({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, path = '/', noindex = false }) {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).href
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', SOCIAL_IMAGE)
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', SOCIAL_IMAGE)

    const canonicals = [...document.head.querySelectorAll('link[rel="canonical"]')]
    const canonical = canonicals.shift() ?? document.createElement('link')
    for (const duplicate of canonicals) duplicate.remove()
    canonical.rel = 'canonical'
    canonical.href = canonicalUrl
    if (!canonical.isConnected) document.head.appendChild(canonical)
  }, [title, description, path, noindex])

  return null
}

export { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_URL }
export default SEO
