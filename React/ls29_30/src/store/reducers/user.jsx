
import { storeUsers } from '../store'; 
import { USERS, DELETE_USERS } from '../constants';

export function usersReducer(store = storeUsers, action) {

    switch (action.type) {
        case USERS: return { ...store, users: action.payload };
        case DELETE_USERS: return { users: [] };
        default: return {...store};
    }
}