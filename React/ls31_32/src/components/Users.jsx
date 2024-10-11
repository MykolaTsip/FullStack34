
import { useDispatch, useSelector } from 'react-redux';

// import { ApiUsers, ClearUsers } from '../store/actions';
import { getPlaceholderUsers, clearUsers } from '../store/slices/users.slice';


export const Users = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(store => store)


    return (
        <div>
            {
                !Boolean(users.length) && <button onClick={() => dispatch(getPlaceholderUsers())}> SHOW USERS </button>
            }
            {
                Boolean(users.length) && <button onClick={() => dispatch(clearUsers())}> DELETE USERS </button>
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