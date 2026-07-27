import { useState, useEffect } from 'react'

interface Conductor {
  id: number
  name: string
  email: string
  username: string
  company: { name: string }
}

export default function FetchUser_mp() {
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState<Conductor | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function fetchUser() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)
        const data: Conductor = await res.json()
        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchUser()
    return () => { cancelled = true }
  }, [userId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              padding: '6px 14px', borderRadius: 6, border: '1px solid #d1d5db',
              background: userId === id ? '#0070f3' : '#fff', color: userId === id ? '#fff' : '#333',
              cursor: 'pointer', fontWeight: userId === id ? 600 : 400,
            }}
          >
            Conductor {id}
          </button>
        ))}
      </div>
      {loading && <p style={{ color: '#6b7280', fontSize: 14 }}>Consultando base de datos...</p>}
      {error && <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>}
      {user && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>{user.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>Placa de asignación: @{user.username}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>Contacto: {user.email}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>Cooperativa: {user.company.name}</p>
        </div>
      )}
    </div>
  )
}
