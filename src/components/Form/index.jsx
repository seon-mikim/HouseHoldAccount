import LabelInputWrapper from "../common/LabelInputWrapper"

const Form = ({ ...props }) => {
	return (
		<form {...props}>
			<div>
				<LabelInputWrapper/>
				<LabelInputWrapper/>
				<LabelInputWrapper/>
				<LabelInputWrapper/>
				<LabelInputWrapper/>
				<LabelInputWrapper/>
				<LabelInputWrapper />
				<LabelInputWrapper />
			</div>
		</form>
	)
}

export default Form