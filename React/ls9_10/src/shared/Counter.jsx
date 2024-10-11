import { Component } from 'react'



class Counter extends Component {

    state = {
        counter: 0
    }

    plus = () => {
        this.setState(this.state.counter+1)
    }

    // return ()
    render () {
        const { counter } = this.state;

        return (
            <div>
                <hr />
                <button onClick={this.plus}> +++ </button>
                <span> { counter } </span>
                <button onClick={() => this.setState(counter-1)} > --- </button>
                <hr />
            </div>
        )
    }
}


export default Counter;