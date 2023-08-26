import React from 'react';
import Card from '../../ui/Card';

const List = ({ listItem, onClick }) => {
  return (
    <div>
      <Card item={listItem} onClick={ onClick} />
    </div>
  );
};

export default List;
