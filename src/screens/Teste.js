import React, {Component} from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../redux/actionCreators'
import { Form, Input, Pagination } from 'antd'

const FormItem = Form.Item

class ScreenTeste extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            loading: false,
            iconLoading: false
        }
        
        props.setNavigation({...props.match})
    }

    render(){
        return (
            <div>
                <Form layout="vertical">
                    <FormItem
                        label="Success"
                        hasFeedback
                        validateStatus="success"
                    >
                        <Input placeholder="I'm the content" id="success" />
                    </FormItem>
                </Form>

                <br/>
                <br/>

                <Pagination defaultCurrent={42} total={500} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTeste)
