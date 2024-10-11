
import { useRef } from 'react'
import { createPortal } from 'react-dom'

import { Funk } from './Funk';
import {  MyClass } from './Class';

const Comp = () => (
    <div>
        <div> Hello from portal </div>
    </div>
)

export function Portal() {

    const port = createPortal(<div> Hello from portal </div>,  document.getElementById('hello'))

    const reddd = useRef()

    return (
        <div>
            <h2 ref={reddd}>
                Hello world 
            </h2>
            <div onClick={() => console.log(reddd)}> I am PORTAL </div>
            <div> I am PORTAL </div>
            <div> I am PORTAL </div>
            {/* { port } */}
            { createPortal(<Comp/>,  document.getElementById('hello')) }

            <hr />
            <hr />
            <hr />
            <hr />
            <Funk/>
            <MyClass/>
            <hr />
        </div>
    )
}