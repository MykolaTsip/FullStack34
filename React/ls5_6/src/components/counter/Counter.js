import React from 'react';

export default function Counter () {

    // let count = 0;

    // const data = React.useState(0);
    let [ count, setCount ] = React.useState(0);



    const minus = () => {
        // count--;
        console.log(222);

        // data[1](--data[0])
        setCount(--count)
    } 

    function plus () {
        setCount(++count)
    }

    return (
        <div>
            <button style={{marginRight: "10px"}} onClick={plus} > Plus </button>
                    {/* { data[0] } */}
                    { count }
            <button style={{marginLeft: "10px"}} onClick={minus}> Minus </button>
        </div>
    )
}
