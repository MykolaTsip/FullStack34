import { Component } from "react";


export { Header } from './Header';
// export { Cont, Cont1 } from './Content';
export * from './Content';
export * from './Footer'


export class Gello extends Component {

    render () {
        return (<div> Hello WORLDS </div>)
    }

}