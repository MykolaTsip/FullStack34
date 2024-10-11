import { useState, useEffect } from "react";


export function useDateCounter(state = Math.random()) {

    const [counter, setCounter ] = useState(state);
    const [date, setDate ] = useState(new Date().toString());


    useEffect(() => {
        setDate(new Date().toString())
    })

    return {counter, setCounter, date}
}