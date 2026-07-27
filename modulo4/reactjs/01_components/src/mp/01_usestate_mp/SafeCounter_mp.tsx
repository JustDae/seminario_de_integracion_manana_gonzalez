import { useState } from 'react'

export default function SafeCounter_mp() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((prev) => prev + 1)
  }

  function incrementThree() {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Buses despachados: {count}</p>
      <button onClick={increment}>+1 Bus</button>
      <button onClick={incrementThree}>+3 Buses</button>
    </div>
  )
}
