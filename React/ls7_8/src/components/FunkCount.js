// import React from 'react'
import { useState } from 'react'


// class Person {}
// new Person()



export default function FunkCounter () {

    const [count, setCount] = useState(0);

    // let count1 = 0;

    const pl = () => {
        setCount(count+1)
        console.log(count);
    }

    const mn = () => {
        setCount(count-1)
        console.log(count);
    }


    const setZero = () => {
        setCount(0)
    }

    return (
        <div>
            <button onClick={pl}> PLUS </button>
            <span> { count }  </span>
            <button onClick={mn}> MINUS </button>
            <div onClick={setZero}>
                SET 000000000000000
            </div>
        </div>
    )
}