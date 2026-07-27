import { useEffect } from 'react'

export default function DocumentTitle_mp() {
  useEffect(() => {
    document.title = 'App de Gestión de Transporte'
    return () => { document.title = 'React App' }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#181818ff' }}>
      El título de la pestaña cambió al nombre del Sistema de Transporte Público.
    </p>
  )
}
