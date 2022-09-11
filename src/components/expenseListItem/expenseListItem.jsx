import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/globalState';
import './expenseListItem.css'

export const ExpenseListItem = ({id, panelId}) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseCost, setExpenseCost] = useState(0);

  const { addExpense } = useContext(GlobalContext);

  const onChange = () => {
    const newExpense = {
      panelId: panelId,
      id: id,
      expenseName,
      expenseCost: +expenseCost
    };
    
    addExpense(newExpense);
  } 

  return (
    <div>
        <form onBlur={onChange} className="input-asd">
            <input type="text" value={expenseName} className="input-text" onChange={(e) => setExpenseName(e.target.value)} placeholder="Expense name"/>
            <input type="number" value={expenseCost} className="input-cost" onChange={(e) => setExpenseCost(e.target.value)} placeholder="€0.00"/>
        </form>
    </div>
  )
}
