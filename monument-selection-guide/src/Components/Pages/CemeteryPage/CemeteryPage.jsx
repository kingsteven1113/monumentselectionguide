import React from 'react'
import './CemeteryPage.css'


onst USERS = [
  { id: 1, name: 'St. Raymonds Cemetery', },
  { id: 2, name: 'Woodlawn Cemetery', },
  { id: 3, name: 'Kensico Cemetery', },
  { id: 4, name: 'Mt. Pleasant Cemetery',},
  { id: 5, name: 'Gate of Heaven Cemetery', },
  { id: 6, name: 'St. Francis Cemetery', },
  { id: 7, name: 'Oakwood Cemetery', },
  { id: 8, name: 'Mt. Calvary Cemetery', },
  { id: 9, name: 'Sleepy Hollow Cemetery', },
  { id: 10, name: 'Sharon Gardens Cemetery', },
  { id: 11, name: 'St. Lawrence OToole Cemetery', },
  { id: 12, name: 'Raymond Hill Cemetery', },
  { id: 13, name: 'Mt. Eden Cemetery', },
  { id: 14, name: 'Mt. Hope Cemetery', },
  { id: 15, name: 'Bethel Cemetery', },
  { id: 16, name: 'Amawalk Hill Cemetery', },
  { id: 17, name: 'Queen of Peace Cemetery', },
  { id: 18, name: 'Center Cemetery', },
  { id: 19, name: 'Holy Rood Cemetery', },
  { id: 20, name: 'Evergreen Cemetery', },
  { id: 21, name: 'Fairview Cemetery', },
  { id: 22, name: 'Middle Patent Rural Cemetery', },
  { id: 23, name: 'South Salem Cemetery', },
  { id: 24, name: 'Ivandell Cemetery', },
  { id: 25, name: 'St. Marys Cemetery', },
  { id: 26, name: 'St. Johns Cemetery(Darien)', },
  { id: 27, name: 'St. Josephs Cemetery(Yonkers)', },
  { id: 28, name: 'Fair Ridge Cemetery(Chappaqua)', },
  { id: 29, name: 'White Plains Rural Cemetery', },
  { id: 30, name: 'Spring Grove Cemetery', },
  { id: 31, name: 'Woodland Cemetery', },
  { id: 32, name: 'Riverside Cemetery(Norwalk)', },
  { id: 33, name: 'Cold Spring Cemetery', },
  { id: 34, name: 'Buxton Cemetery', },
  { id: 35, name: 'Cedar Hill Cemetery', },
  { id: 36, name: 'Mt. Repose Cemetery', },
  { id: 37, name: 'Oakland Cemetery', },
  { id: 38, name: 'Rose Hills Cemetery', },
  { id: 39, name: 'Hillside Cemetery(New Jersey)', },
  { id: 40, name: 'Mt. Moriah Cemetery', },
  { id: 41, name: 'Holy Sepulchre Cemetery(New Rochelle)', },
  { id: 42, name: 'Beechwood Cemetery', },
  { id: 43, name: 'Hillside Cemetery(Cortlandt Manor)', },
  { id: 44, name: 'Assumption Cemetery', },
  { id: 45, name: 'St. Augustine Cemetery', },
  { id: 46, name: 'Dale Cemetery', },
  { id: 47, name: 'Pound Ridge Cemetery', },
  { id: 48, name: 'Bedford Union Cemetery', },
  { id: 49, name: 'St. Josephs Cemetery(Somers)', },
  { id: 50, name: 'St. Johns Cemetery(Norwalk)', },
  { id: 51, name: 'Lakeview Cemetery', },
  { id: 52, name: 'Maple Avenue Cemetery', },
  { id: 53, name: 'Gate of Heaven Cemetery(New Jersey)', },
  { id: 54, name: 'Brookside Cemetery', },
  { id: 55, name: 'Mt. Carmel Cemetery', },
  { id: 56, name: 'Mary Rest Cemetery(Mahwah, NJ)', },
  { id: 57, name: 'St. Josephs Cemetery(Hackensack, NJ)', },
  { id: 58, name: 'Bloomfield Cemetery', },
  { id: 59, name: 'Maple Grove Cemetery', },
  { id: 60, name: 'Holy Cross Cemetery(Arlington)', },
  { id: 61, name: 'Fishkill Rural Cemetery', },

];


const CemeteryPage = () => {

   const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };


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
     

        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div class="CemeteryList">
            <li key={user.id} className="ListItem" onClick={(e) => setCemetery(e.target.innerText)}> 
              {user.name}
            </li>
            </div>
             <NavLink to="/cemetery"><button className='GetStarted'>Next</button></NavLink>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
    </>
  )
}

export default CemeteryPage
