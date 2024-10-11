import { Component, createRef } from 'react'

import { ExampleContext } from '../App';


export class MyClass extends Component {

    state = {
        
    }

    render () {

        return (
            <div>
                Hello class comp


                <ExampleContext.Consumer>
                    {(resultOfContext) => (
                        <div>
                            {resultOfContext}
                        </div>
                    )}
                </ExampleContext.Consumer>
            </div>
        )
    }
}