import React from 'react'
import './CemeteryPage.css'

const CemeteryPage = () => {
 
  
function setCemetery(value) {
  
	localStorage.setItem("Cemetery", value)

}

window.addEventListener("load", () => {
  // (A) GET HTML ELEMENTS
  var filter = document.getElementById("the-filter"), // search box
      list = document.querySelectorAll("CemeteryList div"); // all list items
  // (B) ATTACH KEY UP LISTENER TO SEARCH BOX
  filter.onkeyup = () => {
    // (B1) GET CURRENT SEARCH TERM
    let search = filter.value.toLowerCase();
    // (B2) LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
    for (let i of list) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) { i.classList.add("hide"); }
      else { i.classList.remove("hide"); }
    }
  };
});
  }

  return (
    <>
    <div className='Header'>
        <h1>What <span>cemetery</span> is this stone going to?</h1>
       <center><div className='Line'></div></center>
    </div>
     <div class="CemeteryList" id='CemeteryList'>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St Anthony's Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
       Hillside Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Raymonds Cemetery (Bronx)
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Woodlawn Cemetery (Bronx) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Kensico Cemetery (Valhalla)
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Pleasant Cemetery (Valhalla) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Gate of Heaven Cemetery (Valhalla) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Francis Cemetery (Mt. Kisco) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Oakwood Cemetery (Mt. Kisco) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Calvary Cemetery (White Plains) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Sleepy Hollow Cemetery 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Sharon Gardens Cemetery (Valhalla) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Lawrence O'Toole Cemetery (Brewster) 
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Raymond Hill Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Eden Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Hope Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Bethel Cemetery (Croton)
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Amawalk Hill Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Queen of Peace Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Center Cemetery
        </div>
        <div className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Holy Rood Cemetery (Morristown)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Evergreen Cemetery (Morristown)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Fairview Cemetery (Fairview)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Middle Patent Rural Cemetery (North Castle) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        South Salem Cemetery (South Salem) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Ivandell Cemetery (Somers) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Mary's Cemetery (Bethel) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. John's Cemetery (Darien) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Josephs Cemetery (Yonkers) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Mary's Cemetery (Port Chester) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Mary's Cemetery (Yonkers) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Fair Ridge Cemetery (Chappaqua) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        White Plains Rural Cemetery (White Plains) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Spring Grove Cemetery (Darien, CT)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Woodland Cemetery (Darien, CT)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Riverside Cemetery (Norwalk, CT) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Cold Spring Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Buxton Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Cedar Hill Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Repose Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Oakland Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Rose Hills Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Hillside Cemetery (New Jersey)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Moriah Cemetery (Fairview)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Holy Sepulchre Cemetery (New Rochelle) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Beechwood Cemetery (New Rochelle)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Hillside Cemetery (Cortlandt Manor) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Assumption Cemetery (Cortlandt Manor) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Augustine Cemetery (Ossining) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Dale Cemetery (Ossining) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Pound Ridge Cemetery (Pound Ridge) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Bedford Union Cemetery (Bedford) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Joseph's Cemetery (Somers) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. John's Cemetery (Norwalk) 
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Lakeview Cemetery (New Canaan, CT)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Maple Avenue Cemetery
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Gate Of Heaven (New Jersey)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Brookside Cemetery (Saddlebrook)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Carmel Cemetery (Saddlebrook)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mary Rest Cemetery (Mahwah)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St Josephs Cemetery (Hackensack)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Bloomfield Cemetery (Bloomfield)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Maple Grove Cemetery (Hackensack)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Holy Cross Cemetery (Arlington)
        </div>
        <div  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Fishkill Rural Cemetery (Fishkill)
        </div>
      </div>
	    
    </>
  )
}

export default CemeteryPage
 








