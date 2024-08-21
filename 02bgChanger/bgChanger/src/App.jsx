import { useState } from 'react'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => { setColor("Red") }} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => { setColor("Green") }} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => { setColor("Blue") }} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => { setColor("Grey") }} className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: "Grey" }}>Grey</button>
        </div>
      </div>
    </>
  )
}

export default App
