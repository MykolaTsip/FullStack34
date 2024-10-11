
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


export const UserDetail = () => {
    const data = useParams(); 
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        if (!user) {
            fetch('https://jsonplaceholder.typicode.com/users/' + data.id).then(useBr =>{
                console.log(useBr);  
                return useBr.json()  
                }
            ).then(u => setUser(u))
        }
    })


    console.log(data);

    return (
        <div>
            New USER:
            <h3>
                {
                    user && JSON.stringify(user)
                }
            </h3>
        </div>
    )
}