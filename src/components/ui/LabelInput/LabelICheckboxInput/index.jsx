import Input from '../../Input';
import Label from '../../Label';
import LabelInner from '../LabelInner';

const LabelCheckboxInput = ({ title, name, type, checkBoxCheck, value }) => {

	
  return (
    <div className="label-container">
      <Label>{title}</Label>
      <LabelInner>
				<Input type={type} name='isMemo' checked={checkBoxCheck}  />
      </LabelInner>
      {checkBoxCheck ? (
        <LabelInner>
          <span>메모 작성</span>
					<Input type="text" name={name} value={value}  />
        </LabelInner>
      ) : (
        ''
      )}
    </div>
  );
};

export default LabelCheckboxInput;
