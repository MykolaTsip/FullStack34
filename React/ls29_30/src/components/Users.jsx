
import { useDispatch, useSelector } from 'react-redux';

import { ApiUsers, ClearUsers } from '../store/actions';

export const Users = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(store => store.getUsers)


    return (
        <div>
            {
                !Boolean(users.length) && <button onClick={() => dispatch(ApiUsers())}> SHOW USERS </button>
            }
            {
                Boolean(users.length) && <button onClick={() => dispatch(ClearUsers())}> DELETE USERS </button>
            }


            {
                Boolean(users.length) && users.map(user => (
                    <div key={user.id}>
                        <b> { user.id } </b> - { user.username }
                    </div>
                ))
            }

        </div>
    )
}