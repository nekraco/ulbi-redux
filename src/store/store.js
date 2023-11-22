import {createStore} from "redux";
import {myReducer} from "./cashReducer";


export const store = createStore(myReducer);