import {createStore} from 'redux';
import { Reducers } from '../reducers/Reducers';
import { Reducers2 } from '../reducers/Reducers2';
import { AddressReducers } from '../reducers/AddressReducers';
import { combineReducers } from 'redux';
import { OrderReducer } from '../reducers/OrderReducers';

const routeReducer = combineReducers({
    Reducers,
    Reducers2,
    AddressReducers,
    OrderReducer
});

export const store = createStore(routeReducer);