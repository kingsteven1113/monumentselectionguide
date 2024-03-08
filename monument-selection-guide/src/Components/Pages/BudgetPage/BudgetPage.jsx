import React, { useState } from 'react';

const BudgetChoices = () => {
  const [selectedBudget, setSelectedBudget] = useState(null);

  const handleBudgetSelection = (budget) => {
    setSelectedBudget(budget);
    localStorage.setItem('selectedBudget', budget);
  };

  return (
    <div>
      <h2>Choose a Budget:</h2>
      <ul>
        <li onClick={() => handleBudgetSelection('Budget 1')}>Budget 1</li>
        <li onClick={() => handleBudgetSelection('Budget 2')}>Budget 2</li>
        <li onClick={() => handleBudgetSelection('Budget 3')}>Budget 3</li>
        <li onClick={() => handleBudgetSelection('Budget 4')}>Budget 4</li>
        <li onClick={() => handleBudgetSelection('Budget 5')}>Budget 5</li>
      </ul>
      {selectedBudget && <p>Selected Budget: {selectedBudget}</p>}
    </div>
  );
};

export default BudgetChoices;
