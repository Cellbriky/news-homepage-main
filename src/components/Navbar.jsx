import React, { useState } from 'react'
import { Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navpage } from '../subpage/Navpage'

const Navbar = () => {
  const [subMenu, setSubmenu]=useState(false)
  const navigate=useNavigate()
  const handleopenToggle=()=>{
    setSubmenu(true)
  }
  const handlecloseToggle=()=>{
    setSubmenu(false)
  }
  return (
    <div class='flex justify-between items-center sticky bg-[var(--Off-white)] inset-0 p-4 lg:p-12'>
      <ul class='flex items-center justify-between w-full lg:px-8'>
        <div >
          <img src='images\logo.svg'/>
        </div>
        <div class='hidden lg:flex items-center gap-8'>
          <NavLink to='/' class='lg:text-xl '><li class='lg:text-xl xl:text-base hover:text-[var(--SoftRed)]' >Home</li></NavLink>
          <NavLink to='new'><li class='lg:text-xl xl:text-base hover:text-[var(--SoftRed)]'>New</li></NavLink>
          <NavLink to='popular'><li class='lg:text-xl xl:text-base hover:text-[var(--SoftRed)]'>Popular</li></NavLink>
          <NavLink to='trending'><li class='lg:text-xl xl:text-base hover:text-[var(--SoftRed)]'>Trending</li></NavLink>
          <NavLink to='categories'><li class='lg:text-xl xl:text-base hover:text-[var(--SoftRed)]'>Categories</li></NavLink>
        </div>
      </ul>
      <div class='flex, item-center lg:hidden' onClick={handleopenToggle}>
        <img src='images\icon-menu.svg'/>
      </div>
      {subMenu && <div class='bg-[var(--transparentBg)] fixed inset-0 z-1000 flex items-center  justify-end' >
        <div class='bg-[var(--Off-white)] w-64 p-5 h-full  '>
          <div class='flex justify-end mb-12' onClick={handlecloseToggle}><img src='images\icon-menu-close.svg'/></div>
          <div class='mt-12'>
            <NavLink to='/'><li class='list-none mt-4'>Home</li></NavLink>
            <NavLink to='new'><li class='list-none mt-4'>New</li></NavLink>
            <NavLink to='popular'><li class='list-none mt-4'>Popular</li></NavLink>
            <NavLink to='trending'><li class='list-none mt-4'>Trending</li></NavLink>
            <NavLink to='categories'><li class='list-none mt-4'>Categories</li></NavLink>
          </div>
        </div>
      </div>}
    </div>
  )
}
export default Navbar