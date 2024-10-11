import { useReducer } from "react";


const initState = {
    counter: 0
}

const COUNT_ACTIONS = {
    PLUS: 'PLUS',
    MINUS: 'MINUS'
}


function counterReducer (state, action) {
    // console.log(state, action);

    switch (action) {
        case COUNT_ACTIONS.MINUS: return {...state, counter: state.counter - 1}
        break;
        case COUNT_ACTIONS.PLUS: return {...state, counter: state.counter + 1}
        break;
        default: return {...state, counter: 0}
    }

}

export function Counter2 () {


    const [state, dispatch] = useReducer(counterReducer, initState)

    const plus = () => dispatch(COUNT_ACTIONS.PLUS)

    const minus = () => dispatch(COUNT_ACTIONS.MINUS)


    return (
        <div>
            <button onClick={plus}>++++</button>
                {/* <span> { state } </span> */}
                <span> { state.counter } </span>
            <button onClick={minus}>----</button>
            {/* <button onClick={() => setCount(0)} > SET ZERO </button> */}
        </div>
    )

}