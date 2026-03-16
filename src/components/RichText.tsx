import React from 'react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  RichText as PayloadRichText,
} from '@payloadcms/richtext-lexical/react'

export function RichText({ content }: { content: SerializedEditorState | null | undefined }) {
  if (!content) return null

  return <PayloadRichText data={content} />
}
