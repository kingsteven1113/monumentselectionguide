import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BudgetPage.css'

const BudgetPage = () => {
  const [selectedBudget, setSelectedBudget] = useState(null);

  const handleBudgetSelection = (budget) => {
    setSelectedBudget(budget);
    localStorage.setItem('Budget', budget);
    let NextButton = document.getElementById("NextPage");
    NextButton.style.display = "block";
  };

  return (
    <div>
      <h1>What is your <span>budget</span>?</h1>
      <div className='Line'></div>
      <ul className='BudgetOptions'>
        <li className='ListItemBudget' onClick={(budget) => handleBudgetSelection(budget.target.innerText)}>$1000-$2000</li>
        <li className='ListItemBudget' onClick={(budget) => handleBudgetSelection(budget.target.innerText)}>$2000-$3000</li>
        <li className='ListItemBudget' onClick={(budget) => handleBudgetSelection(budget.target.innerText)}>$3000-$4000</li>
        <li className='ListItemBudget' onClick={(budget) => handleBudgetSelection(budget.target.innerText)}>$4000-$5000</li>
        <li className='ListItemBudget' onClick={(budget) => handleBudgetSelection(budget.target.innerText)}>$5000+</li>
      </ul>
      {selectedBudget && <h2> Your Selected Budget: <span>{selectedBudget}</span></h2>}
      <NavLink to='/stonetype' id="NextPage">
        <button className="GetStarted">Next</button>
      </NavLink>
    </div>
    
  );
};

export default BudgetPage;
