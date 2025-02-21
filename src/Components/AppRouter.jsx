import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import { Home } from './Home'
import { News } from './News'
import { Navbar } from './ui/Navbar'

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/About' element={<About/>} />
        <Route  path='/News' element={<News/>} />
        <Route  path='/Contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
