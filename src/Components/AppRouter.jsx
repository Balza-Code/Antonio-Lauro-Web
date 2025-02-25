import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './About'

import { Home } from './Home'
import { News } from './News'
import { Navbar } from './ui/Navbar'

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/Antonio-Lauro-Web' element={<Home/>} />
        <Route  path='/About' element={<About/>} />
        <Route  path='/News' element={<News/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
