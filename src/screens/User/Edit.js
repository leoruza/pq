import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../../redux/actionCreators'
import { Collapse, Radio } from 'antd'

const Panel = Collapse.Panel
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const text = (
	<p style={{ paddingLeft: 24 }}>
		A dog is a type of domesticated animal.
		Known for its loyalty and faithfulness,
		it can be found as a welcome guest in many households across the world.
	</p>
)


class ScreenUserEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 0,
		}

        props.setNavigation({...props.match})
	}

	render() {
		return(
			<div>
				<RadioGroup defaultValue="a" size="large">
					<RadioButton value="a">Hangzhou</RadioButton>
					<RadioButton value="b">Shanghai</RadioButton>
					<RadioButton value="c">Beijing</RadioButton>
					<RadioButton value="d">Chengdu</RadioButton>
				</RadioGroup>
				<Collapse bordered={false} defaultActiveKey={['1']}>
					<Panel header="This is panel header 1" key="1">
						{text}
					</Panel>
					<Panel header="This is panel header 2" key="2">
						{text}
					</Panel>
					<Panel header="This is panel header 3" key="3">
						{text}
					</Panel>
				</Collapse>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenUserEdit)