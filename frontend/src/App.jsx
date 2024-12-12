import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom';
// import Adjust from './pages/Adjust'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
    
    </>
  )
}

export default App
