

let InitialStare = {
	cash: 0,
}

export const cashReducer = (state = InitialStare, action) => {
	switch (action.type) {
		case 'PLUS-CASH':
			return {...state, cash: state.cash + action.cash};

		case 'MINUS-CASH':
			return {...state, cash: state.cash - action.cash};

		default:
			return state;
	}

}