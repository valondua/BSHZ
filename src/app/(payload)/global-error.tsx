'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
          <h2>Payload Global Error</h2>
          <pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>
            {error.message}
          </pre>
          {error.digest && <p>Digest: {error.digest}</p>}
          <pre>{error.stack}</pre>
          <button onClick={reset}>Try again</button>
        </div>
      </body>
    </html>
  )
}
