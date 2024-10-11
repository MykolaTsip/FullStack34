import { createStore, legacy_createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { countReducer } from './reducers/counter';



// export const newStore = createStore(countReducer);
export const myStore = legacy_createStore(countReducer, composeWithDevTools());
