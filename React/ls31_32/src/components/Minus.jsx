import { useDispatch, useSelector } from 'react-redux';

import { minus } from '../store/slices/counter.slice'; 

export function Minus () {

    const dispatch = useDispatch()

    const { counter } = useSelector(store => store);


    return (
        <button onClick={() => dispatch(minus())}>  MINUS { counter } </button>
    )
}