import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
// import Adjust from './pages/Adjust'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
