import { useState } from "react";

function App() {

  const [counter,setCounter]=useState(1)

  const addValue = () =>{
    setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1 className="text-3xl font-bold">COUNTER : {counter}</h1>

      <button onClick={addValue}> Add Value</button>
      <br/>

      <button onClick={removeValue}> Remove Value</button>
    </>
  )
}

export default App
