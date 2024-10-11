import { useNavigate }  from 'react-router-dom';

import { users } from '../constants';


export function Users () {
    const nav = useNavigate();

    const goToUser = (user) => {
        // nav('/users/' + user.id + '/' + Math.random())

        nav('/users/' + user.id + '/' + Math.random() + '?userEmail=' + user.email, { state: 'dshfjghfjd;ksfjl' })
    };


    return (
        <div>
            <h3> Users </h3>
            { users.length && users.map((user, i) => (
                <div key={i} style={{margin: '10px', padding: '10px', border: '2px solid red'}}>
                   <b> { user.id }. </b> { user.name }
                   <div>
                    Email: { user.email }
                   </div>
                   <div style={{margin: '10px 0'}}>
                    {/* <Link to={'/users/' + user.id}> Show details of user {user.id}</Link> */}
                    <button onClick={() => goToUser(user)}> how details of user {user.id} </button>
                   </div>
                </div>
            ))}
        </div>
    )
}