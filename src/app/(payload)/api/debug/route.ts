import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const diagnostics: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    env: {
      hasDbUri: !!process.env.DATABASE_URI,
      dbUriPrefix: process.env.DATABASE_URI?.substring(0, 30) + '...',
      hasPayloadSecret: !!process.env.PAYLOAD_SECRET,
      hasBlobToken: !!process.env.BLOB_READ_WRITE_TOKEN,
      serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || '(not set)',
      nodeEnv: process.env.NODE_ENV,
    },
  }

  try {
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    diagnostics.configLoaded = true

    const payload = await getPayload({ config })
    diagnostics.payloadInit = true
    diagnostics.collections = payload.collections
      ? Object.keys(payload.collections)
      : 'none'

    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })
    diagnostics.dbConnected = true
    diagnostics.userCount = users.totalDocs
  } catch (error) {
    diagnostics.error = String(error)
    diagnostics.stack = (error as Error).stack?.substring(0, 500)
  }

  return NextResponse.json(diagnostics)
}
