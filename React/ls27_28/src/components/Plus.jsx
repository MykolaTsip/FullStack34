import { connect } from "react-redux"

import { P } from '../store/actions/counter.jsx';

function Plus ({ P, AddOneNum }) {

    console.log(P, 111, AddOneNum);

    return (
        <>
            <button onClick={AddOneNum}> PLUS as AddOneNum: ...  dispatch... </button>
            <button onClick={() => P()}> PLUS as P </button>
        </>

    )
}

const mapStateFromProps = (state) => ({count: state.count})
const mapDispatchToProps = (dispatch) => ({
    AddOneNum: () => dispatch(P()),
    P
})


export default connect(mapStateFromProps, mapDispatchToProps)(Plus)