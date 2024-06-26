import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(20_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagic: i === 19_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [num, Setnum] = useState(nums)

  //const magical = num.find(item => item.isMagic === true)
  const magical = useMemo(() => num.find(item => item.isMagic === true), [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <span>Number is {magical.index}</span>
      </div>
    </>
  )
}

export default App
