import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidatePathHook =
  (path: string): CollectionAfterChangeHook =>
  ({ doc }) => {
    revalidatePath(path)
    if (doc.slug) {
      revalidatePath(`${path}/${doc.slug}`)
    }
    return doc
  }
