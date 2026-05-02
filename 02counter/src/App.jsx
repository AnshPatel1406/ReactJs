import { useState } from 'react' // Hooks Comes From Here 
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Here We use useState Hook to change state 

function App() {
// useState return 2 values in array form a counter and a function
// isLoggedin , setLoggedin | login , setLogin etc.... 
  let [counter,setCounter] = useState(15)

  // let counter = 5
 
  const addValue = ()=> {
    // counter += 1 // when we use Hook | useState we dont update like this 
    setCounter(counter+1)

    console.log("Clicked",counter);
    // here when the button is clicked in console we see counter is updating 
    // but in Display h2 the value of counter does not Chnage
    // Here the Main Role of React Comes into Play

    // in core JS we do it by doucment.getElement and then chnaging the innerHTML but in react it makes it easy 
  }

  const subValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button
    onClick={addValue} // dont do addValue() // as we need to execute when button is clicked not before 
    >Add Value</button>
    <br/>
    <button onClick={subValue}>Decrease Value</button>
    </>
  )
}

export default App
