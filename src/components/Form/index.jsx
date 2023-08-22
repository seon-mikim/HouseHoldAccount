import { useState } from "react"
import Label from "../common/Label"
import Select from "../common/Select"
import INPUT_TYPE from "../../constants/INPUT_TYPE"
import LABEL_NAME from "../../constants/LABEL_NAME"
import INPUT_INITIAL from "../../constants/INPUT_INITIAL"
import LabelInputWrapper from "../common/LabelInputWrapper"

const Form = ({ ...props }) => {
	const [input, setInput] = useState(INPUT_INITIAL)
	return (
		<form {...props}>
			<div>
				<LabelInputWrapper inputType={INPUT_TYPE.text} title={ LABEL_NAME.productName} />
				<LabelInputWrapper inputType={INPUT_TYPE.number} title={LABEL_NAME.price} />
				<div>
					<Label title={LABEL_NAME.productType}/>
					<Select/>

				</div>
				<LabelInputWrapper inputType={INPUT_TYPE.date} title={LABEL_NAME.date } />
				<LabelInputWrapper inputType={INPUT_TYPE.checkbox} title={ LABEL_NAME.memo} />
				<LabelInputWrapper inputType={INPUT_TYPE.radio} title={LABEL_NAME.repurchaseIntentions } />	
			</div>
			<div>
				<button>Add</button>
			</div>
		</form>
	)
}

export default Form