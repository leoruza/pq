import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb as Breadc } from 'antd'

const Breadcrumb = props => {

	const breadcrumbName = {
		user:'Usuário',
		home:'Principal',
		new:'Novo',
		edit:'Editar',
		teste:'Teste'
	}

	return (
		<div className="breadcrumb">
			<Breadc>
				{
					props.navigation.path.split('/').map(item => {							
							return (
								<Breadc.Item key={item}>
									{breadcrumbName[item]}
								</Breadc.Item>
							)
						}
					)
				}
			</Breadc>
		</div>
	)
}

const mapStateToProps = state => {
    return {
        navigation: state.navigation
    }
}

export default connect(mapStateToProps)(Breadcrumb)