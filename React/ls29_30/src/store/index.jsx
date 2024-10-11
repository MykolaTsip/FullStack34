import { createStore, legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import { counterReducer, usersReducer } from './reducers';

const allReducers = combineReducers({
    counter: counterReducer,
    getUsers: usersReducer
})

export const MyOwnStore =  legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));