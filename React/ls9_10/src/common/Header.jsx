import { Component } from 'react'

// import './Header.css';
import Styles from './Header.module.css';

export class Header extends Component {


    render () {
        return (
            // <div class="nav">
            <div className={Styles.nav}>
                <div>Logo</div>
                <ul>
                    <li> Nav 1 </li>
                    <li> Nav 2 </li>
                    <li> Nav 3 </li>
                    <li> Nav 4 </li>
                </ul>
                <div>Profile</div>
            </div>
        )
    }

}