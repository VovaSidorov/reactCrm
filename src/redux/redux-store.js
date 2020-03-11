import {combineReducers, createStore} from 'redux';
import userReducer from "./userReducer";

let reducers = combineReducers({
    userPage: userReducer
})

let store = createStore(reducers);

export default store;