'use client'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h2>Admin Error</h2>
      <pre style={{ color: 'red', whiteSpace: 'pre-wrap' }}>
        {error.message}
      </pre>
      {error.digest && <p>Digest: {error.digest}</p>}
      <button onClick={reset}>Try again</button>
    </div>
  )
}
