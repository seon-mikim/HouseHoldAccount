import React from 'react';
import Select from '../Select';
import Label from '../Label';

const LabelSelect = ({ name, title, optionData, value, ...props }) => {
  return (
    <div {...props}>
      <Label className='label'>{title}</Label>
      <Select name={name} optionData={optionData} value={value} />
    </div>
  );
};

export default LabelSelect;
