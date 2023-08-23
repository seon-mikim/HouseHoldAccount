import React from 'react';
import Item from './Item';

const List = ({ listItem }) => {
  return (
    <div>
      <Item item={listItem} />
    </div>
  );
};

export default List;
