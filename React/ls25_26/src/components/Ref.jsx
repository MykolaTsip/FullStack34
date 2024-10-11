import { Component, createRef } from 'react'


export class Ref extends Component {

    dataTag = createRef();

    render () {

        return (
            <div>
                <div ref={this.dataTag}>eee</div>
                <div>erww</div>
                <div>rewrew</div>
                <div onClick={() => console.log(this.dataTag)}>ewrewrw</div>
            </div>
        )
    }

}