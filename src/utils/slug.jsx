export function createSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-")
}

export function slugToTitle(slug) {
  return slug.replace(/-/g, " ")
}