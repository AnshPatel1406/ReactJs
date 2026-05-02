import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  let counter = 5
 
  const addValue = ()=> {
    counter += 1
    console.log("Clicked",counter);
    // here when the button is clicked in console we see counter is updating 
    // but in Display h2 the value of counter does not Chnage
    // Here the Main Role of React Comes into Play

    // in core JS we do it by doucment.getElement and then chnaging the innerHTML but in react it makes it easy 
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button
    onClick={addValue} // dont do addValue() // as we need to execute when button is clicked not before 
    >Add Value</button>
    <br/>
    <button>Decrease Value</button>
    </>
  )
}

export default App
