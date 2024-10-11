import { Link } from 'react-router-dom'


export const Error = () => (
    <div>
        <hr />
        <h2> IT IS ERRROR COMPONENT  </h2>
        <h3> PLEASE COME BACK TO HOME PAGE </h3>
        <div style={{textAlign: 'center'}}>
            <Link to='/'> GO TO HOME </Link>
        </div>
        <hr />
    </div>
)