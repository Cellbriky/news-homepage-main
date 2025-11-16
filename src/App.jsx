import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/Home'
import New from './pages/New'
import Popular from './pages/Popular'
import Trending from './pages/Tranding'
import Categories from './pages/Categories'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<RootLayout/>} >
        <Route index element={<Home/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='popular' element={<Popular/>}/>
        <Route path='trending' element={<Trending/>}/>
        <Route path='categories' element={<Categories/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
