// import { legacy_createStore } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import counter from './slices/counter.slice';
import users from './slices/users.slice';

// const rootReducer = combineReducers(counter, users)
const rootReducer = {
    counter,
    users
}

// const myStore = legacy_createStore()

export const myStore = configureStore({
    reducer: rootReducer,
    devTools: true,
    // middleware: true
});