export function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
}

export function slugToTitle(slug) {
  return slug.replace(/-/g, " ")
}