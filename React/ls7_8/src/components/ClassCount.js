import React from 'react';


export default class ClassCounter extends React.Component {

   state = {
    count: 0,
    hello: 'hello'
   }

    pl = () => {
        // this.count = this.count + 1
        // this.state.count = this.state.count + 1

        this.setState({count: this.state.count+1})
    }

    mn = () => {
        // this.count = this.count - 1

        this.setState({count: this.state.count-1})
    }


    setZero = () => {
        // this.count = 0;
        this.setState({count: 0})
    }


    render() {

        console.log(this.state.count);

        return (
            <div>
                <h1>
                 My FIRST CLASS COMPONENT
                </h1>

                <button onClick={this.pl}> PLUS </button>
                <span> { this.state.count }  </span>
                <button onClick={this.mn}> MINUS </button>
                <div onClick={this.setZero}>
                    SET 000000000000000
                </div>
                { this.state.hello }
            </div>
        )
    }


//     return (
//         <div> H ds ks bdfkhs </div>
//     ) 

// return() {

//     return <div> H ds ks bdfkhs </div>
// }
}