import React from 'react'
import './CemeteryPage.css'

const CemeteryPage = () => {
  const OpenNextPage = () => {
    const Cemetery = document.getElementById("CemeteryPage")
      Cemetery.style.display = "none"
    const Budget = document.getElementById("Budget")
      Budget.style.display = "none"
  }
  return (
    <div className='Header'>
        <h1>What <span>cemetery</span> is this stone going to?</h1>
       <div className='Line'></div>
      <div>
        <ul>

          // Need to make a Cemetery API and call it so that we don't need to write them all in individually.
          
        </ul>
      </div>
       
    </div>
  )
}

export default LandingPage
