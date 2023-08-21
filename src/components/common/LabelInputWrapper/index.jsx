import React from 'react'
import Input from '../Input'
import Label from '../Label'

const LabelInputWrapper = ({ title,inputType,...props }) => {
	
	return (
		<div{...props}>
			<Label title={title}/>
			<Input type={inputType} />
			{title === '메모'&& inputType === 'checkbox'? <Input type='text'/>: '' }
			{title === '재구매 의사'&& inputType === 'radio'? <Input type='radio'/>: '' }
		</div>
	)
}

export default LabelInputWrapper