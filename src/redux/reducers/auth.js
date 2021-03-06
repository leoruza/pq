function reducer (state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.value
		case 'DESTROY_AUTH':
			return state - action.value
		default:
			return state
	}
}

export default reducer