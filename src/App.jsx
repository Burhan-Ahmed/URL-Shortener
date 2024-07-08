import { useState } from 'react'
import './App.css'


function App() {

  return (
    <div className='border-black border m-40 '>
      <h1 className='font-semibold text-center '>Counter</h1>
      <div className='m-auto border border-black p-5 w-fit rounded-md'>count</div>
      <div className='w-fit  space-x-10 border border-black flex m-auto'>
        <button>Decrement</button>
        <button>Reset</button>
        <button>Increment</button>
      </div>
    </div>
  )
}

export default App
