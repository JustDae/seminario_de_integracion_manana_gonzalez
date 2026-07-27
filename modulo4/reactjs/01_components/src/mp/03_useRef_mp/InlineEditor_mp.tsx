import { useState, useRef, useEffect } from 'react'

export default function InlineEditor_mp() {
  const [isEditing, setIsEditing] = useState(false)
  const [station, setStation] = useState('Estación Central')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  function handleSave() {
    setIsEditing(false)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {isEditing ? (
        <>
          <input ref={inputRef} value={station} onChange={(e) => setStation(e.target.value)} style={{ padding: '6px 10px', fontSize: 16 }} />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          <span style={{ fontSize: 16, fontWeight: 600 }}>Parada Actual: {station}</span>
          <button onClick={() => setIsEditing(true)}>Editar Parada</button>
        </>
      )}
    </div>
  )
}
