import { useCallback, useState } from 'react'
import './App.css'

export default function ChildA({ learn }) {
    const [count, setCount] = useState(0)
    const learning = useCallback(() => {

    }, [])

    return (

        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>

    )
}


