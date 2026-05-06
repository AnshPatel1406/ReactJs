// import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
// Add useRef and useEffect to your imports
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook

  const passwordRef = useRef(null)


  // Use Call Back is a Hook that keeps the function in cache and is called evertime the variables passed in arguments cahnge\
  // we pass a call back function and the dependencies in array format after that 
  // here we have passed  [length, numberAllowed, charAllowed, setPassword]) as dependencies 
  // here setPassword is a function , we are passing reference not calling it  by ()
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

// here setPassword is given instead of passowrd, if password is given it will go in infinite loop 
  }, [length, numberAllowed, charAllowed, setPassword])

  // useCallback is used for optimizitaion , it can be done withouth it also 
  const copyPasswordToClipboard = useCallback(() => {
    // use of useRef hook
    // below 2 lines are just for optimization 
    // they give selection effect so user know it is copied 
    // without it the work will be done but the text will not be selected when button is presssed 
    // just for user experience 

    // ? is used here because its optional, it can be null 
    passwordRef.current?.select(); // highlights the text 
    passwordRef.current?.setSelectionRange(0, 999); // selection range // if given 0,3 only first 3 are highlighted and copied

    // here react compiles in browser so there is window object
    // in next js the thing is rendered on server side so there is not window object there  
    window.navigator.clipboard.writeText(password)
  }, [password])

  // hook to run the passGenerator method evertime changes is made on dependencies 
  // useCallBack is for optimizing the code , the function stays in cache and is run whenever needed 
  // we can make it withouth useCallBack function also 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // this is needed to useRef Hook
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App