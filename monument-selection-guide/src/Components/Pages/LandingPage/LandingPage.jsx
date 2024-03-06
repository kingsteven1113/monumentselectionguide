import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  const OpenNextPage = () => {
    const Cemetery = document.getElementById("CemeteryPage")
      Cemetery.style.display = "block"
    const WelcomePage = document.getElementById("Welcome")
      WelcomePage.style.display = "none"
  }
  return (
    <div className='Welcome'>
        <h1>Welcome to the Monument Selection Guide</h1>
       <div className='Line'></div>
       <p className='Description'>This is a step by step guide that will lead you to making the best monument for your loved one within your budget.</p>
       <button className='GetStarted'> Get Started</button>
       <p className='Notice'>*Please note that this will <span>not</span> keep progress if you close the browser. You will have to start over if you leave the browser.*</p>
       <form method='POST' data-email="kingsteven1113@gmail.com" className='gform' action="https://script.google.com/macros/s/AKfycbyFV7d1t2maciSgHfGuYG5EHPnnjuXEvinNnRVHLTfo4MWiDz9AEoSik_FlsaLhAojK1Q/exec">
        <input name='Timestamp' type="text" />
        <input name='First Name' type="text" />
        <input name='Last Name' type="text" />
        <input name='Email' type="text" />
        <input name='Color' type="text" />
        <input name='Cemetery' type="text" />
        <input name='Budget' type="text" />
        <input name='Shape' type="text" />
        <input name='Finishes' type="text" />
        <input name='Designs' type="text" />
        <input name='Lettering' type="text" />
        <input name='Wording' type="text" />
        <input name='Type' type="text" />
        <button type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default LandingPage
