// initialState is stored in the state parameter
export default (state, action) => {
	switch(action.type) {
		case 'SET_TECHNOLOGY':
			return {
				...state,
				tech: action.payload
			}
		default:
			return state;
	}
}