import React from 'react';
import Label from '../Label';
import Input from '../Input';
import './LabelInput.css';

const LabelInput = ({ title, type, name, value, ...props }) => {
  return (
    <div {...props}>
      <Label className="label">{title}</Label>
      <Input className="input" type={type} name={name} value={value} />
    </div>
  );
};

export default LabelInput;
