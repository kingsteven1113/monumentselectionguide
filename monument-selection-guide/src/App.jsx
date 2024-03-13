import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/Pages/LandingPage/LandingPage'
import CemeteryPage from './Components/Pages/CemeteryPage/CemeteryPage'
import BudgetPage from './Components/Pages/BudgetPage/BudgetPage'

function App() {
  


  return (
    <> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/cemetery' element={<CemeteryPage/>}></Route>
        <Route path='/budget' element={<BudgetPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
