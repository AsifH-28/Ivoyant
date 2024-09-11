import { useState } from 'react'

import './App.css'
import UsersComponent from './components/UsersComponent'
import SearchComponent from './components/SearchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsersComponent />
      <SearchComponent />
    </>
  )
}

export default App
