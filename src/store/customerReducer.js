
const defaultState = {
	customers: [],
}

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD-CUSTOMER':
			return {...state};
		case 'GET-CUSTOMER':
			return {...state};
		default:
			return state;

	}
}