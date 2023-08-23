import FormInner from './FormInner';
import LabelInput from '../../ui/LabelInput';

const Form = ({ onChange, onSubmit }) => {
	const handleSubmit = (event) => {
		onSubmit(event)
	}
  const handleChange = (event) => {
    onChange(event);
  };
  return (
		<form onSubmit={handleSubmit }>
      <FormInner onChange={handleChange}>
        <LabelInput title="이름" type="text" name="productName" />
        <LabelInput title="가격" type="number" name="price" />
        <LabelInput title="구입 날짜" type="date" name="date" />
        <LabelInput title="메모" type="checkbox" />
        <LabelInput title="재구매 의사" type="radio" />
			</FormInner>
			<div>
				<button>제출</button>
			</div>
    </form>
  );
};

export default Form;
