import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todos } from './Interface/Interface'

function App() {
  const [count, setCount] = useState(0);
  const Fetch = async () =>{
    const response  = await fetch('https://jsonplaceholder.typicode.com/todos/1',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }) 
    const data = await response.json() as todos;
    console.log(data.todos);
  }

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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>hello</p>
    </>
  )
}

export default App
