import React, { useState } from 'react';
import './StoneTypePage.css'
import SingleUpright from '../../../assets/Cunha-Front-1920w.jpg'
import SlantMarker from '../../../assets/Dorsett-1920w.jpg'
import DoubleUpright from '../../../assets/Edelstein-1920w.jpg'
import BronzeMarker from '../../../assets/Molella-1920w.jpg'
import FlushMarker from '../../../assets/Samuels-1920w.jpg'
import HickeyMarker from '../../../assets/Speer500-1920w.jpg'


const StoneTypePage = () => {
  const choices = [
    { name: 'Single Upright Headstone', imageUrl: SingleUpright },
    { name: 'Flush Marker', imageUrl: FlushMarker },
    { name: 'Slant Marker', imageUrl: SlantMarker },
    { name: 'Double Upright Headstone', imageUrl: DoubleUpright },
    { name: 'Hickey Marker', imageUrl: HickeyMarker },
    { name: 'Bronze Marker', imageUrl: BronzeMarker },

  ];

  

  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice.name);
    localStorage.setItem('StoneType', choice.name);
  };

  return (
    <div>
      <h2>Choose an Option:</h2>
      <ul>
        {choices.map((choice, index) => (
          <li key={index} className='StoneTypeOption'>
            <div className='StoneInfo'>
              <h3>{choice.name}</h3>
              <button className='SelectButton' onClick={() => handleChoiceSelection(choice)}>Select</button>
              </div>
            
            <img className='StoneImage' src={choice.imageUrl} title={choice.imageUrl} alt={choice.name} />
          </li>
        ))}
      </ul>
      {selectedChoice && <p>Selected Choice: {selectedChoice}</p>}
    </div>
  );
};

export default StoneTypePage;
