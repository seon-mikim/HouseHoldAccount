import Input from '../../Input';
import Label from '../../Label';
import LabelInner from '../LabelInner';
import './style.css'
const LabelCheckboxInput = ({ title, name, type, checkBoxCheck, value, ...props }) => {

	
  return (
    <div {...props}>
      <Label className='label'>{title}</Label>
				<Input type={type} name='isMemo' checked={checkBoxCheck}  />
      {checkBoxCheck ? (
        <LabelInner className='label__inner'> 
          <div className='title'>메모 작성</div>
					<Input className ='memo-input'type="text" name={name} value={value}  />
        </LabelInner>
      ) : (
        ''
      )}
    </div>
  );
};

export default LabelCheckboxInput;
