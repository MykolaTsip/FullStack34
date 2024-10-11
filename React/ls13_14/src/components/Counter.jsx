// import { Component, PureComponent } from "react";
import { useState, useEffect, useLayoutEffect, useCallback, useMemo } from "react"; 


export function Counter () {
    let [count, setCount] = useState(0);
    let [data, setData] = useState({st: true, text: ' text from data'})

    useEffect(() => {
        console.log(222, 'Mounting & Updating');


        return () => {console.log(333, 'UnMount')}
    }, [count]);


    // useEffect(() => {
    //     console.log('Mounting Mounting', true);


    //     return () => console.log('UnMount UnMount', true);
    // })

    // useEffect(() => {
    //     console.log('Mounting Mounting', true);


    //     return () => console.log('UnMount UnMount', true);
    // })


    // useEffect(() => {
    //     console.log('Mounting Mounting', true);


    //     return () => console.log('UnMount UnMount', true);
    // })


    const plus = useCallback(() => { setCount(count++) }, [count])

    function minus() {
        setCount(count--)
    }


    const min = useMemo(() => minus(), [count])

    // shouldComponentUpdate() {

    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate');
    // }
    

    return (
        <div>
            <button onClick={plus}>++++</button>
                <span> { count } </span>
            <button onClick={minus}>----</button>
            <button onClick={() => setCount(0)} > SET ZERO </button>

            <hr />
            <hr />
            { min }
            <hr />

            <h3 onClick={() => setData({...data, st: !data.st})}> { data.st && data.text }  HELLO WORLD </h3>
        </div>
    )
}
