import { Types } from '../actionCreators'

const INITIAL_STATE = {
    path: '/',
    breadcrumb: [
        {
            path: '',
            breadcrumbName: 'Principal'
        }
    ]
}

function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_NAVIGATION:
            return {
                ...action.value            
            }
        default:
            return state
    }
}

export default reducer