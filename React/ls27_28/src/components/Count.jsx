import { connect } from 'react-redux'


function Count ({ count }) {


    return (
        <>
            <span> Count is: { count } </span>
        </>
    )
}

const mapStateFromProps = (state) => ({
    count: state.count
})

export default connect(mapStateFromProps, null)(Count)