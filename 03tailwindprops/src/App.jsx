import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

    let ObjectToPassProps = {
      name : "Ansh",
      age : 19
    }

  return (
    <>
    {/* when writing code Tailwind to vite it can give some error like <img> is not valid but <img/> is   */}
      <h1 className='bg-green-400 text-blue p-10 rounded-xl'>TailWind Test</h1>
       {/* instead of writing the card componenet here making a component folder to store these  */}
       {/* // we can use components as many time we want  */}



       {/* How to pass objects and arrays when calling the components with props | making object above  */ }
      <Card channel="Youtube" someObj = {ObjectToPassProps}/>    {/*We can see this in console |Tailwind 22:27| we can use same thing for {anyArray} */}
      <Card channel="Apchamp"/>
      <Card channel="Minecraft"/>
      <Card channel="hehe"/>
    </>
  )
}

export default App
