import React, { useState } from 'react';
import Form from '../components/HouseHoldPost/Form';
import List from '../components/HouseHoldList/List';
import INITIAL from '../constants/INPUT_INITIAL';

import useLocalStorage from '../hook/useLocalStorage';

const HouseHoldPage = () => {
  const [input, setInput] = useState(INITIAL);
  const [houseHoldData, setHouseHoldData] = useLocalStorage('houseHoldList', []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedList = [...houseHoldData, input];
    setHouseHoldData(updatedList);
  };

  const handleChange = (event) => {
    const { value, name, checked } = event.target;
    console.log(value, name, checked);
    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <Form onChange={handleChange} onSubmit={handleSubmit} />
      {houseHoldData && houseHoldData.map((listItem) => <List listItem={listItem} key={listItem.id} />)}
    </div>
  );
};

export default HouseHoldPage;
