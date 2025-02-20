import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter]=useState(15)
  //let counter=5

  // // simple
  // const addValue=()=>{
  //   setCounter(counter+1);
  // }

  // const removeValue=()=>{
  //   setCounter(counter-1);
  // }

  const addValue = () => {
    // console.log("clicked", counter);
    //counter = counter + 1;
    // setCounter(counter+1)
    if(counter + 1 > 20){
      alert("Limit exceed")
    } 
    else {
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    // setCounter(counter-1)
    if(counter-1 < 0){
      alert("Value cannot be negetive")
    } 
    else {
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>COUNTER APP</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}> Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
