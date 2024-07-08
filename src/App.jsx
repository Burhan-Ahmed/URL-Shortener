import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './reducer'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  return (
    <div className='border-black border m-40 '>
      <h1 className='font-semibold text-center mt-10'>Counter</h1>
      <div className='m-auto border border-black p-5 w-fit rounded-md text-black'>{count}</div>
      <div className='mt-10 mb-10 w-fit  space-x-10  flex m-auto'>
        <button className='pe-4 ps-4 pt-1 pb-1 rounded-lg bg-lime-300' onClick={() => dispatch(increment())}>Increment</button>
        <button className='pe-4 ps-4 pt-1 pb-1 rounded-lg bg-blue-300' onClick={() => dispatch(reset())}>Reset</button>
        <button className='pe-4 ps-4 pt-1 pb-1 rounded-lg bg-red-300' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default App 
