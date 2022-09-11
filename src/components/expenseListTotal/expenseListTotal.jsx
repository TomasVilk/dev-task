import React, { useContext } from 'react'
import './expenseListTotal.css'
import { GlobalContext } from '../../context/globalState';

export const ExpenseListTotal = ({ panelId }) => {
    const { expenses } = useContext(GlobalContext);

    const filteredCosts = () => {
        const arr = expenses.filter((xd) => xd.panelId === panelId )
        return arr
    }

    const listCosts = filteredCosts().map(expense => expense.expenseCost);

    const listTotal = listCosts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <div className="list-total">
        <p className="list-label">Total</p>
        <p className="list-sum">€{listTotal}</p>
    </div>
  )
}

