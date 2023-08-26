import FormInner from './FormInner';
import { LabelInput } from '../../ui/LabelInput';
import LabelRadioInput from '../../ui/LabelInput/LabelRadioInput';
import LabelCheckboxInput from '../../ui/LabelInput/LabelICheckboxInput';
import LabelSelect from '../../ui/LabelSelect';


const Form = ({ onChange, onSubmit, checkBoxCheck, value, options }) => {
  const handleSubmit = (event) => {
    onSubmit(event);
  };
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInner onChange={handleChange}>
        <LabelInput title="이름" type="text" name="productName" value={value.productName} />
        <LabelInput title="가격" type="number" name="price" value={value.price} />
        <LabelSelect
          title="유형"
          name="productType"
          optionData={options}
          value={value.productType}
       
        />
        <LabelInput title="구입 날짜" type="date" name="date" value={value.date} />
        <LabelCheckboxInput title="메모" type="checkbox" name="memo" checkBoxCheck={checkBoxCheck} value={value.memo} />
        <LabelRadioInput title="재구매 의사" type="radio" name="isRepurchase" value={value.isRepurchase} />
      </FormInner>
      <div>
        <button>제출</button>
      </div>
    </form>
  );
};

export default Form;
