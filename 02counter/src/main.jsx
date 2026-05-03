import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// here the method createRoot makes a browser like DOM 
// here it compares 2 DOMs and only update what thing is updated in UI 
// jo chize chnage hui hai wo purane DOM se nikal ke naya laga do 

// now problem is if there is a constant update in the  UI then every senond or given time DOM updates 
// instead we can optimize it and update the 2-3 things at once to save our resources 

// but in browser the DOM everytime reloads whole root



// React Fiber Architecture 

// https://github.com/acdlite/react-fiber-architecture