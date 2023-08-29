import FormInner from './FormInner';
import { LabelInput } from '../../ui/LabelInput';
import LabelRadioInput from '../../ui/LabelInput/LabelRadioInput';
import LabelCheckboxInput from '../../ui/LabelInput/LabelICheckboxInput';
import LabelSelect from '../../ui/LabelSelect';
import './form.css';
const Form = ({ onChange, onSubmit, checkBoxCheck, value, options }) => {
  const todayDate =new Date(Date.now()).toISOString().slice(0,10)

  const handleSubmit = (event) => {
    onSubmit(event);
  };
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FormInner className="form__inner" onChange={handleChange}>
        <LabelInput className="label-input" title="이름" type="text" name="productName" value={value.productName} />
        <LabelInput className="label-input" title="가격" type="number" name="price" value={value.price} min='1' />
        <LabelSelect
          className="label-input"
          title="유형"
          name="productType"
          optionData={options}
          value={value.productType}
        />
        <LabelInput className="label-input" title="구입 날짜" type="date" name="date" value={value.date} max={todayDate} />
        <LabelCheckboxInput
          className="label-input"
          title="메모"
          type="checkbox"
          name="memo"
          checkBoxCheck={checkBoxCheck}
          value={value.memo}
        />
        <LabelRadioInput
          className="label-input"
          title="재구매 의사"
          type="radio"
          name="isRepurchase"
          value={value.isRepurchase}
        />
      </FormInner>
      <div className="button-container">
        <button className="button">제출</button>
      </div>
    </form>
  );
};

export default Form;
