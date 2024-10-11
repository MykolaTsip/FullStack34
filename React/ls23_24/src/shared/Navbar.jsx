import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';


export function Navbar () {


    return (
        // <div class="nav">
        <div className="nav">
            <div>
                <Link className='link2' to='/'>
                    Logo
                </Link>
            </div>
            <ul>
                <li> 
                    <Link className='link2' to='/'>
                        HOME
                    </Link>
                </li>
                <li>
                    <a href="/users">
                        Users
                    </a>
                </li>
                <li>
                    <NavLink className={
                        ({isActive, isPending}) => {
                        console.log(isActive);
                            
                            if (isActive) {
                                return 'active'
                            }

                            if (isPending) {
                                return 'ped'
                            }
    
                            return 'orange' 
                        }} to={'/posts'}>
                        POSTS
                    </NavLink>
                </li>
                <li> Nav 4 </li>
            </ul>
            <div>Profile</div>
        </div>
    )
}

