import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './StoneTypePage.css'
import SingleUpright from '../../../assets/Cunha-Front-1920w.jpg'
import SlantMarker from '../../../assets/Dorsett-1920w.jpg'
import DoubleUpright from '../../../assets/Edelstein-1920w.jpg'
import BronzeMarker from '../../../assets/Molella-1920w.jpg'
import FlushMarker from '../../../assets/Samuels-1920w.jpg'
import HickeyMarker from '../../../assets/Speer500-1920w.jpg'


const StoneTypePage = () => {
  const choices = [
    { name: 'Single Upright Headstone', imageUrl: SingleUpright, description: "Most Common Style. Upright stone, typically with a base below it. Usually used to have 1-2 people's names added to it" },
    { name: 'Flush Marker', imageUrl: FlushMarker, description : "Cheapest option. Flat stone that is flush with the ground, hence the name Flush Marker. Typically 2ft wide by 1ft front to back." },
    { name: 'Slant Marker', imageUrl: SlantMarker, description : "The perfect in-between stone. This stone can be by itself or have a base below it. It is one step up from a hickey marker but is still smaller than an Upright stone." },
    { name: 'Double Upright Headstone', imageUrl: DoubleUpright, description: "Same as the Single Upright but it is a lot wider to add more names. Typically used for large family plots or for two seperate graves side by side." },
    { name: 'Hickey Marker', imageUrl: HickeyMarker, description: "This is a flush marker but it is typically 2-4 inches taller than the flush marker and also has a bit of a slant to it. " },
    { name: 'Bronze Marker', imageUrl: BronzeMarker, description: "The Bronze Marker is a manufactured piece of bronze attached to a piece of granite." },

  ];


const modalSite = (event) =>{ 


  const Name = event.target.alt
  const ImageLink = event.target.src
  document.getElementById("CurrentImage").src = ImageLink;
    
      let ItemName = document.getElementById("ItemName")
      	ItemName.innerText = Name
      let modal = document.getElementById("myModal")
      modal.style.display = "block"
       
      }

                      // Get the <span> element that closes the modal
let span = document.getElementById("close");
let modal = document.getElementById("myModal");
              window.onclick = function(event) {
                span.onclick = function(){ modal.style.display = "none"; }
  if (event.target == modal) {
    modal.style.display = "none"; 
      
  } }
        // When the user clicks on <span> (x), close the modal
  

  

  const [selectedChoice, setSelectedChoice] = useState(null);
 

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice.name);
    localStorage.setItem('StoneType', choice.name);
    let NextButton = document.getElementById("NextPage");
    NextButton.style.display = "block";
  };

  

  return (
    <div>
      <div id="myModal" className="modal">

  <div id="modal-content" className="modal-content">
  <span className="close" id="close">
  ×
  </span>
  <h3 id="ItemName">
  Some text in the Modal..
</h3>
<img className='ModalImage' id='CurrentImage' width="auto" height="auto"  alt="" />
</div>
</div>
      
      <h1>What <span>type of stone</span> would you like?</h1>
      <div className='Line'></div>
      <ul className='TypeOptions'>
        {choices.map((choice, index) => (
          <li key={index} className='StoneTypeOption'>
            <div className='StoneInfo'>
              <h3>{choice.name}</h3>
              <p className='TypeDescription'>{choice.description}</p>
              <button className='SelectButton' onClick={() => handleChoiceSelection(choice)}>Select</button>
              </div>
            
            <img className='StoneImage' src={choice.imageUrl} title={choice.name} alt={choice.name} onClick={(event)=> modalSite(event)}/>
            
          </li>
        ))}
      </ul>
      {selectedChoice && <p className='Selection'>Selected Choice: <span className='SelectionValue'>{selectedChoice}</span></p>}
      
      <NavLink to='/stoneshape' id="NextPage">
        <button className="GetStarted">Next</button>
      </NavLink>
    </div>
    
  );
};

export default StoneTypePage;
