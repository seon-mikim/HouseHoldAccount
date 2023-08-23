import React from 'react';
import Label from '../Label';
import Input from '../Input';

const LabelInput = ({ title, type, name }) => {
  const isMemo = title === '메모';
  const isRebuy = title === '재구매 의사';

  return (
    <div>
      <Label>
        {title}
        <Input type={type} name={name} />
        {isMemo ? '메모 작성' : ''}
        {isRebuy ? '한다' : ''}
      </Label>
      {isRebuy ? (
        <Label>
          <Input type={type} name={name} />
          안한다
        </Label>
      ) : (
        ''
      )}
    </div>
  );
};

export default LabelInput;
