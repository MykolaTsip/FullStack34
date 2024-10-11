import { initStore } from '../store';

import { PLUS, MINUS, ZERO } from '../actions/counter';


export function countReducer (store = initStore, action) {

    const { count } = store;

    console.log(action);

    switch (action.type) {
        case PLUS: return { ...store, count: store.count + 1 };
        case MINUS: return { ...store, count: count - 1 };
        case ZERO: return { ...store, count: 0 };
        default: return {...store}
    }
}