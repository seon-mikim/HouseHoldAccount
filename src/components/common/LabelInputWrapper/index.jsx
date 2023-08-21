import React from 'react'
import Input from '../Input'
import Label from '../Label'

const LabelInputWrapper = ({...props }) => {
	return (
		<div{...props}>
			<Label />
			<Input />
		</div>
	)
}

export default LabelInputWrapper