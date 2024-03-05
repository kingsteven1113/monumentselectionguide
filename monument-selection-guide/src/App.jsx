import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/Pages/LandingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <LandingPage id="Welcome"></LandingPage>
    </>
  )
}

export default App
