import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import "./Home.css"
import Content from '../Components/Content'

const Home = () => {
  return (
    <>
    <div className='parent bg-gray-200'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='mainbar'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Content />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home