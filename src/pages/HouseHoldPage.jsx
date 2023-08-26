import React, { useState } from 'react';
import INITIAL from '../constants/INPUT_INITIAL';
import Form from '../components/HouseHoldPost/Form';
import List from '../components/HouseHoldList/List';
import './style.css';
import useLocalStorage from '../hook/useLocalStorage';
import uniqueId from '../util/uniqueId';
import { PRODUCT_TYPE } from '../constants/OPTION_CATEGORY';

const HouseHoldPage = () => {
  const [input, setInput] = useState(INITIAL);
  const [options, setOptions] = useState(PRODUCT_TYPE);
  const [checkBoxCheck, setCheckBoxCheck] = useState(false);
  const [houseHoldData, setHouseHoldData] = useLocalStorage('houseHoldList', []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedList = [...houseHoldData, input];
    setHouseHoldData(updatedList);
    setInput(INITIAL);
    setCheckBoxCheck(false);
    setOptions(PRODUCT_TYPE);
  };

  const handleClick = (id) => {
    const deleteCard = houseHoldData && houseHoldData.filter((item) => item.id !== id);
    setHouseHoldData(deleteCard);
  };

  const handleChange = (event) => {
    const { value, name, checked } = event.target;
    console.log(value, name, checked);
    setInput({ ...input, [name]: value, id: uniqueId() });
    if (name === 'isMemo') return setCheckBoxCheck(checked);
    if (value.trim()) return;
  };

  return (
    <div className="main-page">
      <Form
        onChange={handleChange}
        onSubmit={handleSubmit}
        checkBoxCheck={checkBoxCheck}
        value={input}
        options={options}
      />
      {houseHoldData &&
        houseHoldData.map((listItem) => <List listItem={listItem} key={listItem.id} onClick={handleClick} />)}
    </div>
  );
};

export default HouseHoldPage;
