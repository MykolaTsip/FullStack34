import { useContext, useEffect } from "react"

import { ExampleContext } from '../App';

export function Funk () {

    const myContext = useContext(ExampleContext);


    // useEffect(() => {


    // })
    
    console.log(myContext);
    return (
        <div>
            Hello world
        </div>
    )
}