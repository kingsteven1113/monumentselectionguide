import React from 'react'
import './CemeteryPage.css'

const CemeteryPage = () => {
  const OpenNextPage = () => {
    const Cemetery = document.getElementById("CemeteryPage")
      Cemetery.style.display = "none"
    const Budget = document.getElementById("Budget")
      Budget.style.display = "none"
  }
  
const SetCemetery = (ListItem) => {
	localStorage.setItem("Cemetery", ListItem.value)
  
}
  return (
    <>
    <div className='Header'>
        <h1>What <span>cemetery</span> is this stone going to?</h1>
       <div className='Line'></div>
    </div>
     <div class="CemeteryList">
        <button class="ListItem" onclick="SetCemetery(this)" value="St. Anthony's Cemetery">
        St Anthony's Cemetery
        </button>
        <button class="ListItem" onclick="SetCemetery(this)" value="Hillside Cemetery">
       Hillside Cemetery
        </button>
      </div>
    </>
  )
}

export default LandingPage
