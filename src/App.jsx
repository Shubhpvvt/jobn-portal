import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Onboarding from './page/Onboarding';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
