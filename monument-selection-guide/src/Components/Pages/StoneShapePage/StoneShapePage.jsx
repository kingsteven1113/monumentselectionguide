import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './StoneShapePage.css'
import OvalTop from '../../../assets/OvalTop.svg'
import SerpTop from '../../../assets/SerpTop.svg'
import RoofTop from '../../../assets/RoofTop.svg'
import FlatTop from '../../../assets/FlatTop.svg'



const StoneShapePage = () => {
  const choices = [
    { name: 'Flat Top', imageUrl: FlatTop },
    { name: 'Serpentine Top', imageUrl: SerpTop},
    { name: 'Oval Top', imageUrl: OvalTop},
    { name: 'Roof Top', imageUrl: RoofTop},

  ];
    

  const [selectedChoice, setSelectedChoice] = useState(null);
 

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice.name);
    localStorage.setItem('StoneShape', choice.name);
    let NextButton = document.getElementById("NextPage");
    NextButton.style.display = "block";
  };

  

  return (
    <div>
      
      
      <h1>What <span>shape of stone</span> were you thinking of having?</h1>
      <div className='Line'></div>
      <ul className='ShapeOptions'>
        {choices.map((choice, index) => (
          <li key={index} className='StoneShapeOption'>
            <img className='StoneShapeImage' src={choice.imageUrl} title={choice.name} alt={choice.name} onClick={() => handleChoiceSelection(choice)} />
            <div className='StoneShapeInfo'>
              <h3>{choice.name}</h3>
              <button className='SelectButton' onClick={() => handleChoiceSelection(choice)}>Select</button>
              </div>
          </li>
        ))}
      </ul>
      {selectedChoice && <p className='Selection'>Selected Choice: <span className='SelectionValue'>{selectedChoice}</span></p>}
      
      <NavLink to='/budget' id="NextPage">
        <button className="GetStarted">Next</button>
      </NavLink>
    </div>
    
  );
};

export default StoneShapePage;
