import React from 'react'
import { Route } from 'react-router-dom'

import ScreenUserNew from './User/New'
import ScreenUserEdit from './User/Edit'
import ScreenHome from './Home'
import ScreenTeste from './Teste'

const ScreensRoot = props => {
    return (
        <div>
            <Route path="/user/new/:id?" component={ScreenUserNew} />
            <Route path="/user/edit/:id?" component={ScreenUserEdit} />
            <Route path='/home' component={ScreenHome} />
			<Route path='/teste' component={ScreenTeste} />
        </div>
    )
}

export default ScreensRoot
