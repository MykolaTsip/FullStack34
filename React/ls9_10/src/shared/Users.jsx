import { Component } from "react";

import { Users as users } from '../constants';


export class Users extends Component {

    state = {
        users
    }

    removeUser = (id) => {
        console.log(id);

        const { users } = this.state;

        // const indUser = users.findIndex(el => el.id === id);
        // users.splice(indUser, 1);
        // this.setState({users});


        const newArr = users.filter(user => user.id !== id);
        this.setState({users: newArr});
    }

    render() {

        return (
            <div>
                {
                    this.state.users.map((el, i) => (<div style={{margin: '15px'}} key={i}>
                        <b> {el.id} </b>. 
                        <h3> { el.name } </h3>
                         - { el.email } - { el.address.city } - <button onClick={() => this.removeUser(el.id)}> Delete { el.username } </button>
                    </div>))
                }
            </div>
        )
    }
}
