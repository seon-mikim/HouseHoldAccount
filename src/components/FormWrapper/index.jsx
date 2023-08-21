const FormWrapper = ({children, ...props }) => {
	return (
		<div{...props}>{ children }</div>
	)
}

export default FormWrapper