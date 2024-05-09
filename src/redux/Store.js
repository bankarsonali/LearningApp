import { Reducer } from "./Reducer";
import { combineReducers } from 'redux';
import {createStore} from 'redux';

const routerReducers = combineReducers({
    Reducer
})

export const store = createStore(routerReducers)