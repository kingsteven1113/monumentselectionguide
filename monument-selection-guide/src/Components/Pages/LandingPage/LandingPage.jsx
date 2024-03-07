import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './LandingPage.css'
import FormSubmissionActionLink from "../../../assets/external-scripts/EmailFormSubmission"
import CemeteryPage from '../CemeteryPage/CemeteryPage'


const LandingPage = () => {
 
  return (
    <div className='Welcome'>
        <h1>Welcome to the Monument Selection Guide</h1>
       <div className='Line'></div>
       <p className='Description'>This is a step by step guide that will lead you to making the best monument for your loved one within your budget.</p>
       <NavLink to="/cemetery"><button className='GetStarted'> Get Started</button></NavLink>
       
    </div>
  )
}

export default LandingPage
