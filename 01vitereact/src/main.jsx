import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'

function MyApp(){ // Dont Forget to Name All Function Capital
  return (
    <div>
      Just a Function 
      {/* This Function is Converted in Tree Structure which we say ing customReact thing we made our own Tree and sent to html  */}
    </div>
  )
}
const TestElement = (<a href='http://google.com' target='_blank'> Visit Google</a>)

// Creating Element using React
// we can make custom tree structure object also as we did in customReact but we need a renderfucntion to doucment.createElement and setAttrubte
// here React has inbuilt React.createElement 

const reactElement = React.createElement(
  'a',
  {href :'http://google.com',target:'_blank'},
  'Click Me to Visit Google'
)


createRoot(document.getElementById('root')).render(
  // MyApp() // will run 
  // <MyApp/> // this means the function is executed 
  // TestElement // this will work // TestElement() or <TestElement/> will not Work 
  // reactElement
  <App/>
)
