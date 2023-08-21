import Form from '../Form'
import FormWrapper from '../FormWrapper'
import Input from '../common/Input'
import './style.css'

const Layout = () => {
	return (
		<div className="layout">
			<FormWrapper>
				<Form>
					<Input/>
					<Input/>
					<Input/>
					<Input/>
					<Input/>
					<Input/>
					<Input/>
					<Input/>
			</Form>
			</FormWrapper>
		</div>
	)
}

export default Layout