/**
 * Get the URL for a media file, supporting both local storage and Vercel Blob.
 * Vercel Blob plugin stores URLs as /api/media/file/filename - we use the url field directly.
 */
export function getMediaUrl(media: { url?: string; filename?: string } | null | undefined): string {
  if (!media) return ''

  // If url starts with http, it's already absolute (e.g. direct blob URL)
  if (media.url && media.url.startsWith('http')) {
    return media.url
  }

  // If url exists (e.g. /api/media/file/filename.png from Vercel Blob plugin), use it
  if (media.url) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''
    return `${baseUrl}${media.url}`
  }

  // Fallback to local storage path
  if (media.filename) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''
    return `${baseUrl}/media/${media.filename}`
  }

  return ''
}
