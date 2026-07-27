export default function FruitList_mp() {
  const rutas = ['Ruta Troncal Sur', 'Ruta Centro Express', 'Ruta Universitaria', 'Ruta Perimetral']
  return (
    <div>
      <h3>Rutas Disponibles</h3>
      <ul>
        {rutas.map((ruta) => (
          <li key={ruta}>{ruta}</li>
        ))}
      </ul>
    </div>
  )
}
