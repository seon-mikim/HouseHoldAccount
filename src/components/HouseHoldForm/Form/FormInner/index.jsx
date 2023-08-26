import React from 'react';

const FormInner = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default FormInner;
