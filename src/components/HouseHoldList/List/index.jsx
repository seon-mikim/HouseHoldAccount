import React from 'react';
import Card from '../../ui/Card';
import './List.css'
const List = ({ cardItemData, onClick }) => {
  return (
    <div>
      <Card item={cardItemData} onClick={onClick} />
    </div>
  );
};

export default List;
