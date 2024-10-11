import { useDispatch } from 'react-redux';

import { MinusAction } from '../store/actions'; 

export function Minus () {

    const dispatch = useDispatch()


    return (
        <button onClick={() => dispatch(MinusAction())}>  MINUS </button>
    )
}