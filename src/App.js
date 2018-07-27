import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Layout } from 'antd'
import logo from './assets/img/logo.jpg'

import ScreensRoot from './screens'
import MainMenu from './components/Menu/Main'
import Breadcrumb from './components/UI/Breadcrumb'
import store from './redux'

const { Header, Content, Footer, Sider } = Layout

const App = props => {
	return (
		<Provider store={store}>
			<Router>
				<Layout>
					<Sider breakpoint="lg" collapsedWidth="0" theme="light">
						<img src={logo} alt="PãoQuentinho" className="logo" />
						<MainMenu />
					</Sider>
					<Layout>
						<Header className="header" />
						<Content className="main">
							<Breadcrumb />
							<div className="main-content">
								<Route path='/' component={ScreensRoot} />
							</div>
						</Content>
						<Footer>
							PãoQuentinho
						</Footer>
					</Layout>
				</Layout>
			</Router>
		</Provider>
	)
}

export default App
