import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <div>
      <div>
        <Navbar class='sticky'/>
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout