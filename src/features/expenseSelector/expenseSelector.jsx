import React, { useState } from 'react';
import './expenseSelector.css';
import { DropDown } from '../../components/dropDown/dropDown';
import { CustomButton } from '../../components/customButton/customButton';
import { ExpenseListItem } from '../../components/expenseListItem/expenseListItem';
import { ExpenseListTotal } from '../../components/expenseListTotal/expenseListTotal';

export const ExpenseSelector = ({ panelId }) => { 
  const [value, setValue] = React.useState('default');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    list.length = 0;
    setValue(e.target.value);
    const nextId = list.length + 1;
    setList([...list, nextId]);
  };

  const handleRender = (e) => {
    e.preventDefault();
    const nextId = list.length + 1;
    setList([...list, nextId]);
  }
  return (
    <div>
      <div className="expense-wrapper">
        <DropDown 
          options={[
            { label: 'Food', value: 'food' },
            { label: 'Houseware', value: 'houseware' },
            { label: 'Entertainment', value: 'entertainment' },
          ]}
          value={value}
          onChange={handleChange}
        />
        <CustomButton 
            border="2px solid #F0A023"
            bgColor="transparent"
            color="#FFFFFF"
            fontSize="16px"
            fontWeight="500"
            height = "38px"
            onClick={list.length > 0 ? handleRender : null}
            radius = "19px"
            width = "125px"
            children = "Add expense"
            hoverColor="#F0A023"
        />
      </div>
      <div className="input-wrapper">
        {
          list.map((listId) => (
            <ExpenseListItem key={listId} id={listId} panelId={panelId} onChange={handleChange} />
          ))
        }
        {
          list.length !== 0
          ?
          <ExpenseListTotal panelId={panelId} />
          :
          null
        }
      </div>
    </div>
    
  );
};