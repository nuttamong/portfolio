import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { AnimatePresence, motion } from 'framer-motion';

import NavBar from './components/navbar/NavBar'
import Profile from './components/profile/Profile'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Snowfall from './components/Snowfall/Snowfall'


const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    {children}
  </motion.div>
);


function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <div className="info">  
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<PageWrapper><Profile /></PageWrapper>} />
            <Route path='/project' element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </div>
      </AnimatePresence>
      <Snowfall />
    </>
  )
}

export default App