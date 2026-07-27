interface ProductCardProps {
  title: string
  price: number
  description: string
}

export default function ProductCard_mp({ title, price, description }: ProductCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      <p style={{ margin: '0 0 16px 0', color: '#555' }}>{description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Pasaje: ${price.toFixed(2)}</span>
        <button style={{ backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
          Comprar Boleto
        </button>
      </div>
    </div>
  )
}
