import React, { useContext } from 'react'
import './totalCount.css'
import { GlobalContext } from '../../context/globalState';

export const TotalCount = () => {
  const { expenses } = useContext(GlobalContext);

  const costs = expenses.map(expense => expense.expenseCost);
  const total = costs.reduce((acc, val) => (acc += val), 0).toFixed(2);

  return (
    <div className="total-wrapper">
        <p className="total">Total</p>
        <p className="total-sum">€{total}</p>
    </div>
  )
}

