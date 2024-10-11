

import { useEffect  } from 'react';
import { users } from '../constants';


export function User () {



    const goToUser = (user) => {
        
    }


    return (
        <>
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
        </>
    )
}