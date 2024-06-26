import { useCallback, useState } from 'react'
import './App.css'
import ChildA from './childA'

export default function App() {
  const [count, setCount] = useState(0)
  const learning = useCallback(() => {

  }, [count])

  return (

    <div className="card">
      <div>Counter </div>
      <ChildA learn={learning} />
    </div>

  )
}


