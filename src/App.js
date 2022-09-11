import React, { useState } from 'react';
import './App.css';
import { ExpenseSelector } from './features/expenseSelector/expenseSelector';
import { CustomButton } from './components/customButton/customButton';
import { TotalCount } from './components/totalCount/totalCount';
import { GlobalProvider } from './context/globalState';

function App() {
  const [panels, setPanels] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    const nextId = panels.length + 1;
    
    setPanels([...panels, nextId]);
  };

  return (
    <GlobalProvider>
      <div>
        {
          panels.map((panelId) => (
            <ExpenseSelector key={panelId} panelId={panelId} />
          ))
        }
      </div>
      <div className="checkout-wrapper">
        <TotalCount /> 
        <CustomButton 
          border="none"
          bgColor="#F0A023"
          color="#FFFFFF"
          fontSize="16px"
          fontWeight="500"
          height="38px"
          onClick={handleClick}
          radius="19px"
          width="125px"
          children="Add receipt"
          hoverColor="#cc7c1b"
        />
      </div>
    </GlobalProvider>
  );
}

export default App;
