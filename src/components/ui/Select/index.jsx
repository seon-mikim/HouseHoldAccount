import React from 'react';
import Option from '../Option';

const Select = ({ optionData, name, value }) => {
  return (
    <select name={name} value={value===''? optionData[0]: value}>
      {optionData.map((optionValue) => (
        <Option key={optionValue} optionValue={optionValue} value={value}/>
      ))}
    </select>
  );
};

export default Select;
