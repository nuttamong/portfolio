import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

function App() {

  return (
    <Router>
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className="info">
        <Routes>
          <Route path='/' element={Profile} end/>
          <Route path='/project' element={Projects} end/>
          <Route path='/contact' element={Contact} end/>
        </Routes>
      </div>
    </Router>
  )
}

export default App