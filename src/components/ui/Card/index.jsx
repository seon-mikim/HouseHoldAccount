const Card = ({ item, onClick }) => {
	
	const handleClick = (id) => {
	
	 onClick(id)
 }
  return (
    <div>
      <div>{item.date}</div>
      <div>{item.productName}</div>
      <div>{item.price}</div>
			<div>{item.productType}</div>
			<div>{item.memo }</div>
			<div>{item.isRepurchase ? '한다' : '안한다'}</div>
			<button onClick={()=> handleClick(item.id)}>삭제</button>
    </div>
  );
};

export default Card;
