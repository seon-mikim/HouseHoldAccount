import React from 'react';

const Option = ({ optionValue, value }) => {
  console.log(value);
  return <option value={optionValue}>{optionValue}</option>;
};

export default Option;
