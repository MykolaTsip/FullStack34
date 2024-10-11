import { useDispatch, useSelector } from 'react-redux';

import { ZeroAction } from '../store/actions';

export function Zero () {

    const dispatch = useDispatch();

    const { count } = useSelector(store => store.counter)

    return (
        <div>
            <button onClick={() => dispatch(ZeroAction())}> SET ZERO </button>
            <b> New Current State: { count } </b>
        </div>
    )
}