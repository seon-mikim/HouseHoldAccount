import Input from '../../Input';
import Label from '../../Label';
import LabelInner from '../LabelInner';
import './style.css';

const LabelRadioInput = ({ title, name, type, value, ...props }) => {
  console.log(value);
  return (
    <div {...props}>
      <Label className="label">{title}</Label>
      <Label className="label-container">
        <LabelInner className='label__inner'>
          <Input name={name} type={type} value={true} checked={Boolean(value) === true} />
          <span>한다</span>
        </LabelInner>
        <LabelInner>
          <Input name={name} type={type} value={false} checked={Boolean(value) === false} />
          <span>안한다</span>
        </LabelInner>
      </Label>
    </div>
  );
};

export default LabelRadioInput;
