import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu as AntMenu, Icon } from 'antd'

const MainMenu = props => {
    const menuSelected = () => {
		const path = props.navigation.path.split('/')
        return path.length > 2 ? [`/${path[1]}/${path[2]}`] : [`/${path[1]}`]
    }

    const SubMenu = AntMenu.SubMenu
    
    return (
        <AntMenu selectedKeys={menuSelected()} mode="inline">
            <AntMenu.Item key="/home">
                <Link to="/home">
                    <Icon type="pie-chart" />
                    <span>Home</span>
                </Link>
            </AntMenu.Item>
            <AntMenu.Item key="/teste">
                <Link to="/teste">
                    <Icon type="desktop" />
                    <span>Teste</span>
                </Link>
            </AntMenu.Item>
            <SubMenu key="/user" title={<span><Icon type="user" /><span>User</span></span>}>                
                <AntMenu.Item key="/user/new">
                    <Link to="/user/new">
                        Novo
                    </Link>
                </AntMenu.Item>
                <AntMenu.Item key="/user/edit">
                    <Link to="/user/edit">
                        Editar
                    </Link>
                </AntMenu.Item>
            </SubMenu>
        </AntMenu>
        
    )
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation
    }
}

export default connect(mapStateToProps)(MainMenu)