import React from 'react';
import Label from '../Label';
import Input from '../Input';

const LabelInput = ({ title, type, name, value }) => {
  return (
    <div>
      <Label>{title}</Label>
			<Input type={type} name={name} value={value } />
    </div>
  );
};

export default LabelInput;
