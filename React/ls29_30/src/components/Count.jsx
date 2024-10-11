import { connect } from 'react-redux'


function Count ({ count }) {


    return (
        <>
            <span> Count is: { count } </span>
        </>
    )
}

const mapStateFromProps = ({ counter }) => ({ count: counter.count })

export default connect(mapStateFromProps, null)(Count)