import Form from "../Form"

const FormWrapper = ({ ...props }) => {
	return (
		<div{...props}>
		<Form/>
		</div>
	)
}

export default FormWrapper