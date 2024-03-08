import React, { useState } from 'react';

const ChoicesWithImages = () => {
  const choices = [
    { name: 'Choice 1', imageUrl: 'image1.jpg' },
    { name: 'Choice 2', imageUrl: 'image2.jpg' },
    { name: 'Choice 3', imageUrl: 'image3.jpg' },
    { name: 'Choice 4', imageUrl: 'image4.jpg' },
    { name: 'Choice 5', imageUrl: 'image5.jpg' },
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
          <li key={index} onClick={() => handleChoiceSelection(choice)}>
            {choice.name}
            <img src={choice.imageUrl} alt={choice.name} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
      {selectedChoice && <p>Selected Choice: {selectedChoice}</p>}
    </div>
  );
};

export default ChoicesWithImages;
