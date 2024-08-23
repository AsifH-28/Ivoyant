import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChildComponent } from './Components/ChildComponent'

function App() {
  const [count, setCount] = useState(0);
  const [countt, setCountt] = useState(0);
  const PropFunction =useCallback(()=>{
    
    console.log("function recreated");

  },[count])
  const GeneralFunction = ():void =>{
    console.log("Parent Component Rendered")
  }
  console.log("Parent Component Rendered")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          
          count is {count}
        </button>
        <button onClick={()=>{
          setCountt((countt)=>countt+1)
        }}>button 2</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>hello</p>
      <ChildComponent GeneralFunction={PropFunction}/>
    </>
  )
}

export default App
