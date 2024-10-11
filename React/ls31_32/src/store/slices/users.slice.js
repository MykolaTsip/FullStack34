import { createSlice } from '@reduxjs/toolkit';

import { getFetchUsers } from '../../services/user.service';

const users = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        getUsers: (store, { payload }) => {
            console.log(store, payload);
            return payload
        },
        clearUsers: () => []
    }
})


const { getUsers } = users.actions;
export const getPlaceholderUsers = () => (dispatch) => getFetchUsers()
        .then(data => data.json())
        .then(users => dispatch(getUsers(users)) )

export const { clearUsers } = users.actions;

export default users.reducer;