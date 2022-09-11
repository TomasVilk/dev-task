import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

const initialState = {
  expenses: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    addExpense
  }}>
    {children}
  </GlobalContext.Provider>);
}