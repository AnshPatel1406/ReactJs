import Chai from './chai'

function App() {
  const hello = 'Hello World This is a Variable'
  return (
      // <Chai/>
      // <h2>hello</h2> // not Possible // only one at a time

      //to over come this use <> all content here </>
      <>
      <Chai/>
      <h2>hello {hello}</h2> 
      </>
      // <> in React is called as Fragment  
  )
}

export default App
