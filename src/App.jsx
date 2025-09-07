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
          <Route path='/' element={<Login />}/>
          {/* <Route path='/login' element={<Login />}/> */}
          <Route path='/landingPage' element={<LandingPage />} />
        </Routes>
        <Toaster />
    </>
  )
}

export default App