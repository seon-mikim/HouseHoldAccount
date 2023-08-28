import React from 'react';

const LabelInner = ({ children, ...props}) => {
  return <div {...props}>{children}</div>;
};

export default LabelInner;
