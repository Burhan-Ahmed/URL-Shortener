import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './reducer'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  return (
    <div className='border-black border m-40 '>
      <h1 className='font-semibold text-center '>Counter</h1>
      <div className='m-auto border border-black p-5 w-fit rounded-md text-black'>{count}</div>
      <div className='w-fit  space-x-10 border border-black flex m-auto'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App 
