import { Component  } from "react";

import { Users } from '../shared/Users';

export class Cont extends Component {

    data = 'dd dsdgf dfg df';
    // num1 = true
    // num2 = true
    // num3 = true


    state = {
        num1: true,
        num2: true,
        num3: true
    }

    constructor(props) {
        super();
        this.props = props;
    }



    changeN1 = () => this.setState({num1: !this.state.num1});

    changeN2 = () => this.setState({num2: !this.state.num2})


    changeN3 = () => this.setState({num3: !this.state.num3})




    render () {
        // console.log(this.props);

        const {num1, num2, num3} = this.state

        return (
            <div>
                {/* { this.props.title }
                <hr/>
                { this.props.htm }
                { this.props.children } */}

                <hr />
                <button onClick={this.changeN1} >
                    { num1 ? 'Hide' : 'Show' } Num 1
                </button>
                {/* { true && 'ddddd' } */}
                {
                    num1 &&
                    <div>
                        <b> Num 1 </b>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iusto dolorum facilis quasi, 
                        est et dolores nobis voluptatum non ipsam nisi animi reprehenderit
                        cupiditate. Enim, error magnam. Consequuntur, sed cum?
                    </div>
                }

                <hr />
                <button onClick={this.changeN2}>
                    { num2 ? 'Hide' : 'Show' } Num 2
                </button>
                {
                    num2 &&
                    <div>
                        <b> Num 2 </b>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iusto dolorum facilis quasi, 
                        est et dolores nobis voluptatum non ipsam nisi animi reprehenderit
                        cupiditate. Enim, error magnam. Consequuntur, sed cum?
                    </div>
                }


                <hr />
                <button onClick={this.changeN3}>
                    { num3 ? 'Hide' : 'Show' } Num 3
                </button>
                {
                    num3 &&
                    <div>
                        <b> Num 3 </b>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum iusto dolorum facilis quasi, 
                        est et dolores nobis voluptatum non ipsam nisi animi reprehenderit
                        cupiditate. Enim, error magnam. Consequuntur, sed cum?
                    </div>
                }


                <hr />
                <hr />
                <hr />

                <Users/>
            </div>
        )
    }
}


export class Cont1 {

}