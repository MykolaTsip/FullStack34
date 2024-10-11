import { USERS, DELETE_USERS } from '../constants';

import { getUsers } from '../../services/user.api';


export const Users = (usersFromApiUsers) => ({ type: USERS, payload: usersFromApiUsers })

export const ApiUsers = () => (dispatch) => {
    getUsers()
    .then(res => res.json())
    .then(users => {
        console.log(users)
    
        dispatch(Users(users))    
    })
};


export const ClearUsers = () => ({ type: DELETE_USERS });