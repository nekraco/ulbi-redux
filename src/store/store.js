import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";


const rootReducer = combineReducers({
	ca: cashReducer,
	cu: customerReducer,
	
})

export const store = createStore(rootReducer);