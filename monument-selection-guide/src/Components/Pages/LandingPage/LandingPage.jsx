import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='Welcome'>
        <h1>Welcome to the Monument Selection Guide</h1>
       <div className='Line'></div>
       <p className='Description'>This is a step by step guide that will lead you to making the best monument for your loved one within your budget.</p>
       <button className='GetStarted'> Get Started</button>
       <p className='Notice'>Please note that this will <span>not</span> keep progress if you close the browser. You will have to start over if you leave.</p>
    </div>
  )
}

export default LandingPage