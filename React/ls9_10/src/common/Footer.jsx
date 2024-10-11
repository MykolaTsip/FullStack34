import { Component } from "react"


import FootStyle from './Footer.module.css'

export class Footer extends Component {
    contact = 'Contact Us'
    foot = 'Footer'
    f = 'Foot'

    constructor(props) {
        super()
        this.d1 = props
    }


    render () {
        console.log(this.d1);
        
        return (
            <div className={FootStyle.foot}>
                <div> {this.foot} </div>
                <ul className={FootStyle.cont}>
                    <li> {this.f} 1 </li>
                    <li> {this.f} 2 </li>
                    <li> {this.f} 3 </li>
                    <li> {this.f} 4 </li>
                </ul>
                <div> { this.contact } </div>
            </div>
        )

    }
}