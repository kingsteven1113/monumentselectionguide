import React from 'react'
import './CemeteryPage.css'

const CemeteryPage = () => {
 
  
const setCemetery = (ListItem) => {
	localStorage.setItem("Cemetery", ListItem.value)

}
  return (
    <>
    <div className='Header'>
        <h1>What <span>cemetery</span> is this stone going to?</h1>
       <div className='Line'></div>
    </div>
     <div class="CemeteryList">
        <button className="ListItem" value="St. Anthony's Cemetery" onClick={function(){setCemetery(this)}}>
        St Anthony's Cemetery
        </button>
        <button className="ListItem" onClick={setCemetery}>
       Hillside Cemetery
        </button>
      </div>
	    
    </>
  )
}

export default CemeteryPage
 








