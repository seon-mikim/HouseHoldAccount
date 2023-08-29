import React, { useEffect, useState } from 'react';
import INITIAL from '../constants/INPUT_INITIAL';
import Form from '../components/HouseHoldForm/Form';
import './style.css';
import useLocalStorage from '../hook/useLocalStorage';
import uniqueId from '../util/uniqueId';
import {
  DATE_ORDER,
  PRICE_ORDER,
  PRODUCT_TYPE,
} from '../constants/OPTION_CATEGORY';
import ListWrap from '../components/HouseHoldList/ListWrap';

const HouseHoldPage = () => {
  const [input, setInput] = useState(INITIAL);
  const [options, setOptions] = useState(PRODUCT_TYPE);
  const [order, setOrder] = useState([]);
  const [dateOrder, setDateOrder] = useState(DATE_ORDER);
  const [priceOrder, setPriceOrder] = useState(PRICE_ORDER);
  const [checkBoxCheck, setCheckBoxCheck] = useState(false);
  const [houseHoldData, setHouseHoldData] = useLocalStorage(
    'houseHoldList',
    []
  );
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedList = [input, ...houseHoldData];
    if (input.productName === '') return alert('상품 이름을 입력하세요');
    if (input.price === 0) return alert('가격을 입력하세요');
    setHouseHoldData(updatedList);
    setInput(INITIAL);
    setCheckBoxCheck(false);
    setOptions(PRODUCT_TYPE);
  };

  const handleClick = (id) => {
    const deleteCard =
      houseHoldData && houseHoldData.filter((item) => item.id !== id);
    setHouseHoldData(deleteCard);
  };

  const handleChange = (event) => {
    const { value, name, checked } = event.target;
    console.log(value, name, checked);
    setInput({ ...input, [name]: value, id: uniqueId() });
    if (name === 'isMemo') return setCheckBoxCheck(checked);
  };
  const handleOrderChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    if (name === 'dateOrder') {
      const filterDataOrder =
        value === '오래된 순'
          ? sortOldDateOrderFilter
          : sortRecentDateOrderFilter;
      setOrder(prevOrder => filterDataOrder());
    } else if (name === 'priceOrder') {
      const filterPriceOrder =
        value === '가격 낮은 순'
          ? sortCheapOrderFilter
          : sortExpensiveOrderFilter;
      setOrder(prevOrder => filterPriceOrder());
    }
  };

  const sortCheapOrderFilter = () => {
    const cheapOrderFilter =
      houseHoldData &&
      [...houseHoldData].sort(
        (cheap, expensive) => Number(cheap.price) - Number(expensive.price)
      );
    return cheapOrderFilter;
  };
  const sortExpensiveOrderFilter = () => {
    const expensiveOrderFilter =
      houseHoldData &&
      [...houseHoldData].sort(
        (cheap, expensive) => Number(expensive.price) - Number(cheap.price)
      );

    return expensiveOrderFilter;
  };

  const sortOldDateOrderFilter = () => {
    const oldDateFilterData =
      houseHoldData &&
      [...houseHoldData].sort(
        (recent, old) => new Date(recent.date) - new Date(old.date)
      );

    return oldDateFilterData;
  };
  const sortRecentDateOrderFilter = () => {
    const recentDateFilterData =
      houseHoldData &&
      [...houseHoldData].sort(
        (recent, old) => new Date(old.date) - new Date(recent.date)
      );

    return recentDateFilterData;
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

      <ListWrap
        order={order}
        houseHoldData={houseHoldData}
        onClick={handleClick}
        options={dateOrder}
        priceOrder={priceOrder}
        handleOrderChange={handleOrderChange}
      />
    </div>
  );
};

export default HouseHoldPage;
