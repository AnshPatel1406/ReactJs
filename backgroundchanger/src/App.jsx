import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, changeColor] = useState('olive')

  return (
    <>      
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
            <button 
            onClick={()=>changeColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:'red'}}>Red</button>
            <button 
            onClick={()=>changeColor('Yellow')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
            style={{backgroundColor:'yellow'}}>Yellow</button>
            <button 
            onClick={()=>changeColor('Purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:'purple'}}>Purple</button>
            <button 
            onClick={()=>changeColor('Pink')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:'pink'}}>Pink</button>
            <button 
            onClick={()=>changeColor('Blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:'blue'}}>Blue</button>
            
           </div>

      </div>
    

    </div>
  
    </>
  )
}
  
export default App
