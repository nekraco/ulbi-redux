import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


let InitialStare = {
	cash: 0,
}

let myReducer = (state = InitialStare, action) => {
	switch (action.type) {
		case 'PLUS-CASH':
			return {...state, cash: state.cash + action.cash};

		case 'MINUS-CASH':
			return {...state, cash: state.cash - action.cash};

		default:
			return state;
	}

}

const st = createStore(myReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	  <Provider store={st}><App /></Provider>
);


