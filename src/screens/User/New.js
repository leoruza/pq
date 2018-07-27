import React, { Component } from 'react'
import { Steps, Button, message } from 'antd'
import { connect } from 'react-redux'
import ActionCreators from '../../redux/actionCreators'

const Step = Steps.Step

const steps = [{
	title: 'First',
	content: 'First-content',
}, {
	title: 'Second',
	content: 'Second-content',
}, {
	title: 'Last',
	content: 'Last-content',
}]

class ScreenUserNew extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 0,
		}

		props.setNavigation({...props.match})
	}

	next() {
		const current = this.state.current + 1
		this.setState({ current })
	}

	prev() {
		const current = this.state.current - 1
		this.setState({ current })
	}

	render() {
		const { current } = this.state
		return (
			<div>
				<Steps current={current}>
					{steps.map(item => <Step key={item.title} title={item.title} />)}
				</Steps>
				<div className="steps-content">{steps[current].content}</div>
				<div className="steps-action">
					{
						current < steps.length - 1
						&& <Button type="primary" onClick={() => this.next()}>Next</Button>
					}
					{
						current === steps.length - 1
						&& <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
					}
					{
						current > 0
						&& (
						<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
							Previous
						</Button>
						)
					}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => {
	return {
		navigation: state.navigation
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setNavigation: value => dispatch(ActionCreators.setNavigation(value))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenUserNew)