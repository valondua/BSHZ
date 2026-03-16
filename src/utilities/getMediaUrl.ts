/**
 * Get the URL for a media file, supporting both local storage and Vercel Blob.
 * When using Vercel Blob, the media document has a `url` field with the full blob URL.
 * When using local storage, we construct the URL from the filename.
 */
export function getMediaUrl(media: { url?: string; filename?: string } | null | undefined): string {
  if (!media) return ''

  // If Vercel Blob is configured, the media object will have a full `url`
  if (media.url && media.url.startsWith('http')) {
    return media.url
  }

  // Fallback to local storage path
  if (media.filename) {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''
    return `${baseUrl}/media/${media.filename}`
  }

  return ''
}
