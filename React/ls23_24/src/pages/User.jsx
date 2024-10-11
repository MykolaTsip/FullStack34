import { useParams, useLocation } from 'react-router-dom';

import { getUserbyId, getUserbyIdByAxios } from '../services/user.request';

export function User () {
    const dynamicURL = useParams();
    const queryParams = useLocation()

    const paramsData = new URLSearchParams(queryParams.search).get('userEmail');

    const getUserData = async () => {
        // fetch('https://jsonplaceholder.typicode.com/users/' + dynamicURL.id)
        // .then(json => json.json())
        // .then(user => console.log(user))

        // getUserbyId(dynamicURL.id).then(d => d.json()).then(user => console.log(user))
        

        // const user = await getUserbyId(dynamicURL.id)
        const userResponse = await getUserbyIdByAxios(dynamicURL.id)

        console.log(userResponse);

    }

    console.log(dynamicURL, queryParams, 111, paramsData);
    return (
        <div onClick={getUserData}> 
            Helo world
            <button> CLICK  !!!</button>
        </div>
    )
}