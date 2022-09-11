import React from 'react';
import './dropDown.css';

export const DropDown = ({value, options, onChange}) => {
  return (
    <div>
      <select className="drop-down" value={value} onChange={onChange}>
        <option value="default" disabled hidden>Select</option>
        {options.map((option, index) => (
          <option className="option-line" key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
