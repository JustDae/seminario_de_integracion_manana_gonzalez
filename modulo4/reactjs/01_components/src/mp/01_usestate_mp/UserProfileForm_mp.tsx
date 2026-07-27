import { useState } from 'react'

interface ConductorProfile {
  name: string
  email: string
  lastname: string
  age: number
}

export default function UserProfileForm_mp() {
  const [profile, setProfile] = useState<ConductorProfile>({
    name: '',
    email: '',
    lastname: '',
    age: 0,
  })

  function handleChange(field: keyof ConductorProfile, value: string | number) {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <h3>Registro de Conductor</h3>
      <input
        placeholder="Nombre"
        value={profile.name}
        onChange={(e) => handleChange('name', e.target.value)}
        style={inputStyle}
      />
       <input
        placeholder="Apellido"
        value={profile.lastname}
        onChange={(e) => handleChange('lastname', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Email de la empresa"
        type="email"
        value={profile.email}
        onChange={(e) => handleChange('email', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Años de Experiencia"
        type="number"
        value={profile.age}
        onChange={(e) => handleChange('age', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{profile.name || '?'}</strong> - {profile.lastname || '?'} - {profile.email || '?'} - {profile.age || '?'} años de experiencia
        </p>
      </div>
    </form>
  )
}

const inputStyle = { padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, fontSize: 14 }
