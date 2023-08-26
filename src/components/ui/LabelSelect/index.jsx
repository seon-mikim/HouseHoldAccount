import React from 'react';
import Select from '../Select';

const LabelSelect = ({ name, title, optionData, value }) => {
  return (
    <div>
      {title}
      <Select name={name} optionData={optionData} value={value}  />
    </div>
  );
};

export default LabelSelect;
