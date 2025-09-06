import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    let newCount = count + 1
    if(newCount<20){
      setCount(newCount)
    }
  }

  const subtractValue = () => {
    let newCount = count - 1
    if(newCount>=0){
      setCount(newCount)
    }
  }

  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subtractValue}>Subtract Value</button>
    </>
  )
}

export default App
