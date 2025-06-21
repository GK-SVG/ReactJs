import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button style={{margin:"10px", fontSize:"1.5rem"}} onClick={() => setCount((count) => count - 1 > 0 ? count - 1 : 0)}>
          -
        </button>
          count is {count}
        <button style={{margin:"10px", fontSize:"1.5rem"}} onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  )
}

export default App
