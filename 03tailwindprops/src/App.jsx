import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let mObj = {
    myName:"harsh",
    age: 20,
    myArr:[1,2,3]
  } 

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1> 
    <Card myName="Harsh" btnText="click me"/>
    <Card myName="Putin" btnText="touch me"/>

    </>
  )
}

export default App
