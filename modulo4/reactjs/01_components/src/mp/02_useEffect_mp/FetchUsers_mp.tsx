import { useState, useEffect } from 'react'

interface Conductor {
  id: number
  name: string
  email: string
  username: string
  company: { name: string }
}

export default function FetchUsers_mp() {
  const [users, setUsers] = useState<Conductor[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function fetchUsers() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)
        const data = await res.json()
        if (!cancelled) setUsers(data)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchUsers()
    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 360 }}>
      {loading && <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando lista de conductores...</p>}
      {error && <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>}
      {users && !loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {users.map((user) => (
            <div key={user.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8, background: '#f8fafc' }}>
              <p style={{ margin: '0 0 4px', fontWeight: 600, color: '#1e293b' }}> Chofer: {user.name}</p>
              <p style={{ margin: '0 0 4px', fontSize: 13, color: '#475569' }}>
                <strong>Placa Bus:</strong> {user.username.toUpperCase().substring(0,3)}-0{user.id}0
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#475569' }}>
                <strong>Contacto:</strong> {user.email}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#475569' }}>
                <strong>Cooperativa:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
