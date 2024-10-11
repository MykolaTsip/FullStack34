import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';


export function Navbar () {


    return (
        // <div class="nav">
        <div className="nav">
            <div>Logo</div>
            <ul>
                <li>
                    <a href="/users">
                        Users Nav 1 
                    </a>
                </li>
                <li> 
                    <Link className='link2' to='/'>
                        Nav 2 HOME
                    </Link>
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
                        Nav 3 POSTS
                    </NavLink>
                </li>
                <li> Nav 4 </li>
            </ul>
            <div>Profile</div>
        </div>
    )
}

