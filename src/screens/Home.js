import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../redux/actionCreators'
import { Menu, Icon, DatePicker, Input, Tabs, notification, Button, Avatar, Dropdown } from 'antd'

const TabPane = Tabs.TabPane

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
    </Menu>
)

class ScreenHome extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            loading: false,
            iconLoading: false
        }

        props.setNavigation({...props.match})
    }

    onChange = (date, dateString) => {
        console.log(date, dateString)
    }

    enterLoading = () => {
        this.setState({ loading: true })
        setTimeout(this.openNotification,2000)
    }

    callback = (key) => {
        console.log(key)
    }

    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
        })
        this.setState({ loading: false })
    }

    render() {
        return (

            <div>
                <DatePicker onChange={this.onChange} />

                <Input placeholder="Basic usage" />

                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>

                <Button type="primary" onClick={this.openNotification}>Primary</Button>
                <Button type="primary" ghost>Secundary</Button>

                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        <Avatar>L</Avatar> <Icon type="caret-down" style={{ fontSize: 8}} />
                    </a>
                </Dropdown>

                <br/>

                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
                </Button>


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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHome)
