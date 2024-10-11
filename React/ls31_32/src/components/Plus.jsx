import { connect } from "react-redux"

import { PlusAction } from '../store/actions';

function Plus ({ PlusAction: Pl, AddOneNum, dispatch }) {

    console.log(Pl, 111, AddOneNum, 222, dispatch);

    return (
        <>
            <hr />

            <button onClick={AddOneNum}> PLUS as AddOneNum: ...  dispatch... </button>
            <button onClick={Pl}> PLUS as Action: P </button>
            {/* <button onClick={() => dispatch(PlusAction())}> PLUS as dispatch </button> */}

            <hr />
        </>

    )
}

const mapStateFromProps = (state) => ({count: state.counter.count});

const mapDispatchToProps = (dispatch) => ({
    AddOneNum: () => dispatch(PlusAction()),
})


// const mapDispatchToProps = () => ({
//     PlusAction
// })

export default connect(mapStateFromProps, mapDispatchToProps)(Plus)