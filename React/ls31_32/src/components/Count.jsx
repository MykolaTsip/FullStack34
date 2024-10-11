import { connect } from 'react-redux'
import { useSelector } from 'react-redux';


import { myStore } from '../store/index.js';


export function Count () {

    let count = myStore.getState();
    console.log(count);

    let { counter } = useSelector(state => state)


    myStore.subscribe((store) => {
        console.log(store);
    })

    // myStore.dispatch()

    return (
        <>
            <span> Count is: { counter }  from getState: { count.counter }  </span>
        </>
    )
}

// const mapStateFromProps = ({ counter }) => ({ count: counter.count })

// export default connect(mapStateFromProps, null)(Count)

