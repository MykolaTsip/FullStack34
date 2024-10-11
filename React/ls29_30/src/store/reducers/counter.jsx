import { storeCount } from '../store';

import { PLUS, MINUS, ZERO } from '../constants';


export function counterReducer(store = storeCount, action) {
    const { count } = store

    switch (action.type) {
        case PLUS: return { ...store, count: count + 1 } // store.count++ === store.count = store.count + 1
        case MINUS: return { ...store, count: count - 1 }
        case ZERO: return { ...store, count: 0 }
        default: return { ...store }
    }
}