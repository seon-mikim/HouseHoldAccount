import List from '../List';
import Select from '../../ui/Select';
import './ListWrap.css';
const ListWrap = ({
  houseHoldData,
  onClick,
  options,
  priceOrder,
  handleOrderChange,
  order,
}) => {
  return (
    <div>
      <div className="select-wrap">
        <Select
          optionData={options}
          name="dateOrder"
          onChange={handleOrderChange}
        />
        <Select
          name="priceOrder"
          optionData={priceOrder}
          onChange={handleOrderChange}
        />
      </div>
      <div className="list-wrap">
        <div className="list-title">
          <div>날짜</div>
          <div>상품 명</div>
          <div>가격</div>
          <div>유형</div>
          <div>메모</div>
          <div>재구매 의사</div>
        </div>
        {order.length
          ? order &&
            order.map((cardItemData) => (
              <List cardItemData={cardItemData} onClick={onClick} />
            ))
          : houseHoldData &&
            houseHoldData.map((cardItemData) => (
              <List cardItemData={cardItemData} onClick={onClick} />
            ))}
      </div>
    </div>
  );
};

export default ListWrap;
