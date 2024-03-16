import React, { useState } from 'react';
import SingleUpright from ''

const StoneTypePage = () => {
  const choices = [
    { name: 'Single Upright Headstone', imageUrl: 'image1.jpg' },
    { name: 'Flush Marker', imageUrl: 'image2.jpg' },
    { name: 'Slant Marker', imageUrl: 'image3.jpg' },
    { name: 'Double Upright Headstone', imageUrl: 'image4.jpg' },
    { name: 'Hickey Marker', imageUrl: 'image5.jpg' },
    { name: 'Bronze Marker', imageUrl: 'image5.jpg' },

  ];

  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelection = (choice) => {
    setSelectedChoice(choice.name);
    localStorage.setItem('selectedChoice', choice.name);
  };

  return (
    <div>
      <h2>Choose an Option:</h2>
      <ul>
        {choices.map((choice, index) => (
          <li key={index} className='StoneTypeOption'>
            <div>
              <h3>{choice.name}</h3>
              <button className='SelectButton' onClick={() => handleChoiceSelection(choice)}>Select</button>
              </div>
            
            <img src={choice.imageUrl} alt={choice.name} style={{ width: '50%', height: 'auto' }} />
          </li>
        ))}
      </ul>
      {selectedChoice && <p>Selected Choice: {selectedChoice}</p>}
    </div>
  );
};

export default StoneTypePage;
