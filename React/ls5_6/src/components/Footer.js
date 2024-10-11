
import './Footer.css'

export default function Footer (d1) {
    const contact = 'Contact Us'
    const foot = 'Footer'
    const f = 'Foot'

    console.log(d1);

    return (
        <div className={d1.foot}>
            <div> {foot} </div>
            <ul className={d1.cont}>
                <li> {f} 1 </li>
                <li> {f} 2 </li>
                <li> {f} 3 </li>
                <li> {f} 4 </li>
            </ul>
            <div> { contact } </div>
        </div>
    )
}