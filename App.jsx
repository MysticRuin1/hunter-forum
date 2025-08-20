import React, { useEffect, useState } from 'react'

export default function App() {
  const [health, setHealth] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then(setHealth)
      .catch(err => setHealth({ ok: false, error: String(err) }))
  }, [])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Hunternet</h1>
      <p>Unified Frontend + Backend running on one Render service.</p>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </div>
  )
}
