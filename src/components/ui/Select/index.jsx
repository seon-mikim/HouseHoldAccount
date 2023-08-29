import React from 'react';
import Option from '../Option';
import './Select.css'

const Select = ({ optionData, name, value, onChange }) => {
  const handleChange = (event) => {
    if (name === 'dateOrder') return onChange(event);
    if (name === 'priceOrder') return onChange(event)
   
  };
  return (
    <div className='select-container'
      onChange={(event) => {
        handleChange(event);
      }}
    >
      <select className='select' name={name} value={value === '' ? optionData[0] : value}>
        {optionData.map((optionValue) => (
          <Option key={optionValue} optionValue={optionValue}  />
        ))}
      </select>
    </div>
  );
};

export default Select;
