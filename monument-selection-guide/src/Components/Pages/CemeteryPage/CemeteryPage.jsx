import React from 'react'
import './CemeteryPage.css'


const CemeteryPage = () => {


  const SearchFilter = () => {
    // (A) GET HTML ELEMENTS
    var filter = document.getElementById("myInput"), // search box
        list = document.querySelectorAll("#CemeteryList li"); // all list items
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
  }

window.onload = SearchFilter();

function setCemetery(value) {

  localStorage.setItem("Cemetery", value)

}



  return (
    <>
    <div className='Header'>
        <h1>What <span>cemetery</span> is this stone going to?</h1>
       <center><div className='Line'></div></center>
    </div>
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for a cemetery..." title="Type in a cemetery"/>
     <div class="CemeteryList" id='CemeteryList'>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St Anthony's Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
       Hillside Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Raymonds Cemetery (Bronx)
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Woodlawn Cemetery (Bronx) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Kensico Cemetery (Valhalla)
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Pleasant Cemetery (Valhalla) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Gate of Heaven Cemetery (Valhalla) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Francis Cemetery (Mt. Kisco) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Oakwood Cemetery (Mt. Kisco) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Calvary Cemetery (White Plains) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Sleepy Hollow Cemetery 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Sharon Gardens Cemetery (Valhalla) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Lawrence O'Toole Cemetery (Brewster) 
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Raymond Hill Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Eden Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Hope Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Bethel Cemetery (Croton)
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Amawalk Hill Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Queen of Peace Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Center Cemetery
        </li>
        <li className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Holy Rood Cemetery (Morristown)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Evergreen Cemetery (Morristown)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Fairview Cemetery (Fairview)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Middle Patent Rural Cemetery (North Castle) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        South Salem Cemetery (South Salem) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Ivandell Cemetery (Somers) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Mary's Cemetery (Bethel) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. John's Cemetery (Darien) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Josephs Cemetery (Yonkers) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Mary's Cemetery (Port Chester) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Mary's Cemetery (Yonkers) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Fair Ridge Cemetery (Chappaqua) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        White Plains Rural Cemetery (White Plains) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Spring Grove Cemetery (Darien, CT)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Woodland Cemetery (Darien, CT)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Riverside Cemetery (Norwalk, CT) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Cold Spring Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Buxton Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Cedar Hill Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Repose Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Oakland Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Rose Hills Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Hillside Cemetery (New Jersey)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Moriah Cemetery (Fairview)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Holy Sepulchre Cemetery (New Rochelle) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Beechwood Cemetery (New Rochelle)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Hillside Cemetery (Cortlandt Manor) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Assumption Cemetery (Cortlandt Manor) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Augustine Cemetery (Ossining) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Dale Cemetery (Ossining) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Pound Ridge Cemetery (Pound Ridge) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Bedford Union Cemetery (Bedford) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. Joseph's Cemetery (Somers) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St. John's Cemetery (Norwalk) 
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Lakeview Cemetery (New Canaan, CT)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Maple Avenue Cemetery
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Gate Of Heaven (New Jersey)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Brookside Cemetery (Saddlebrook)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mt. Carmel Cemetery (Saddlebrook)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Mary Rest Cemetery (Mahwah)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        St Josephs Cemetery (Hackensack)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Bloomfield Cemetery (Bloomfield)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Maple Grove Cemetery (Hackensack)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Holy Cross Cemetery (Arlington)
        </li>
        <li  className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}>
        Fishkill Rural Cemetery (Fishkill)
        </li>
      </div>

      <NavLink to="/cemetery"><button className='GetStarted'>Next</button></NavLink>

    </>
  )
}

export default CemeteryPage
