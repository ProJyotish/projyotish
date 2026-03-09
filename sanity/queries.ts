import { client } from './client'

// ── Pricing ──────────────────────────────────────────────
export async function getPricing() {
  const data = await client.fetch(`*[_type == "pricing"][0]`)
  if (data) return data
  // fallback to local JSON during migration / before Sanity is populated
  const json = await import('../content/pricing.json')
  return json.default
}

// ── Testimonials ─────────────────────────────────────────
export async function getTestimonials() {
  const data = await client.fetch(`*[_type == "testimonials"][0]`)
  if (data) return data.items ?? []
  const json = await import('../content/testimonials.json')
  return json.default.items
}

// ── Founders ─────────────────────────────────────────────
export async function getFounders() {
  const data = await client.fetch(`*[_type == "founders"][0]`)
  if (data) return data.items ?? []
  const json = await import('../content/founders.json')
  return json.default.items
}

// ── Site Settings ─────────────────────────────────────────
export async function getSiteSettings() {
  const data = await client.fetch(`*[_type == "siteSettings"][0]`)
  if (data) return data
  const json = await import('../content/settings.json')
  return json.default
}

// ── Blog Posts ────────────────────────────────────────────
export async function getBlogPosts() {
  const data = await client.fetch(
    `*[_type == "blogPost" && published == true] | order(date desc) { title, "slug": slug.current, date, excerpt }`
  )
  if (data?.length) return data
  // fallback: read from filesystem (handled in page)
  return null
}

export async function getBlogPost(slug: string) {
  const data = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]`,
    { slug }
  )
  return data ?? null
}

// ── Topics ────────────────────────────────────────────────
export async function getTopicsByPillar(pillar: string) {
  const data = await client.fetch(
    `*[_type == "topic" && pillar == $pillar && published == true] | order(date desc) { title, "slug": slug.current, date, excerpt }`,
    { pillar }
  )
  if (data?.length) return data
  return null
}

export async function getTopic(pillar: string, slug: string) {
  const data = await client.fetch(
    `*[_type == "topic" && pillar == $pillar && slug.current == $slug][0]`,
    { pillar, slug }
  )
  return data ?? null
}
