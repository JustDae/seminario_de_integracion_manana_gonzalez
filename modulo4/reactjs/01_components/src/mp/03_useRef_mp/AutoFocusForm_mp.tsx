import { useRef, useEffect } from 'react'

export default function AutoFocusForm_mp() {
  const placaRef = useRef<HTMLInputElement>(null)
  const rutaRef = useRef<HTMLInputElement>(null)
  const driverRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    placaRef.current?.focus()
  }, [])

  function handlePlacaKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      rutaRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input ref={placaRef} placeholder="Placa del Bus" onKeyDown={handlePlacaKeyDown} style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
      <input ref={rutaRef} placeholder="Línea / Ruta" style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
      <input ref={driverRef} placeholder="Nombre Conductor" style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }} />
      <button type="submit" style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>
        Registrar Salida
      </button>
    </form>
  )
}
