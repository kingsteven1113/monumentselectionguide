import React from 'react'
import './CemeteryPage.css'

const CemeteryPage = () => {
 
  
function setCemetery(value) {
  
	localStorage.setItem("Cemetery", value)

}
  return (
    <>
    <div className='Header'>
        <h1>What <span>cemetery</span> is this stone going to?</h1>
       <div className='Line'></div>
    </div>
     <div class="CemeteryList">
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St Anthony's Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
       Hillside Cemetery
        </div>
      </div>
	    
    </>
  )
}

export default CemeteryPage
 








