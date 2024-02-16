import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let [showDecreaseMessage, setShowDecreaseMessage] = useState(false);
  //we are using array destructuring to get values from useState, variable names i.e [counter, setCounter] can be anything like >> [InCounter, HarshCounter]

  // let counter = 5;

  const addValue = ()=>{
    if(counter >= 20){
      setCounter(20);
    }
    else{
      counter = counter+1;
      setCounter(counter);
      setShowDecreaseMessage(false); // Reset the flag when increasing the value
    }
  }
  const downValue = ()=>{
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
      setShowDecreaseMessage(true); // Set the flag when attempting to decrease from 0
    }
    
  }

  return (
    <>
      <h1>Hey!</h1>
      <h2>Counter value: {counter}</h2>

      {/*IT'll Show a message if counter is greater than or equal to 20  and below given code is evaluated expression, it'll evalute the code and when it's true it'll show a message*/}
      {counter >= 20 && <p>Counter can't go up!</p>}

       {/* It'll Show a message if counter is less than or equal to 0  */}
      {showDecreaseMessage && <p>Counter can't go down!</p>}

      <button
      onClick={addValue}
      >Add value {counter}</button> <br />
      <button
      onClick={downValue}
      >Decrease value{counter}</button>
    </>
  )
}

export default App
