import './Card.css'
const Card = ({ item, onClick }) => {
  const dateOption = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const dateString = new Date(item.date).toLocaleDateString(
    'ko-KR',
    dateOption
  );
  const handleClick = (id) => {
    onClick(id);
  };
  return (
    <div className="card">
      <div className='date'>{dateString}</div>
      <div>{item.productName}</div>
      <div>{item.price}</div>
      <div>{item.productType}</div>
      <div>{item.memo}</div>
      <div>{item.isRepurchase ? '한다' : '안한다'}</div>
      <button onClick={() => handleClick(item.id)}>삭제</button>
    </div>
  );
};

export default Card;
