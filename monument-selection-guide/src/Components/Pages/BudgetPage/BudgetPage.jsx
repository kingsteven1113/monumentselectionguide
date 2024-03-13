import React, { useState } from 'react';
import './BudgetPage.css'

const BudgetPage = () => {
  const [selectedBudget, setSelectedBudget] = useState(null);

  const handleBudgetSelection = (budget) => {
    setSelectedBudget(budget);
    localStorage.setItem('Budget', budget);
  };

  return (
    <div>
      <h1>What is your <span>budget</span>?</h1>
      <div className='Line'></div>
      <ul className='BudgetOptions'>
        <li className='ListItem' onClick={() => handleBudgetSelection('$1000-$2000')}>$1000-$2000</li>
        <li className='ListItem' onClick={() => handleBudgetSelection('$2000-$3000')}>$2000-$3000</li>
        <li className='ListItem' onClick={() => handleBudgetSelection('$3000-$4000')}>$3000-$4000</li>
        <li className='ListItem' onClick={() => handleBudgetSelection('$4000-$5000')}>$4000-$5000</li>
        <li className='ListItem' onClick={() => handleBudgetSelection('$5000+')}>$5000+</li>
      </ul>
      {selectedBudget && <h2> Your Selected Budget: <span>{selectedBudget}</span></h2>}
    </div>
  );
};
<NavLink to='/budget' id="NextPage">
        <button className="GetStarted">Next</button>
      </NavLink>
export default BudgetPage;
