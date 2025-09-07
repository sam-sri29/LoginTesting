import React from 'react'
import Login from './View/Login'
import Signup from './View/Signup'
import { Route, Router, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LandingPage from './View/LandingPage'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/landingPage' element={<LandingPage />} />
        </Routes>
        <Toaster />
    </>
  )
}

export default App