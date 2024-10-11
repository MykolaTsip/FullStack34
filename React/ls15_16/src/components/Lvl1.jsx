import { Component  } from "react";

// import { useDateCounter } from '../custom-hooks/Counter';

import { Lvl2 } from './Lvl2';
import { SecondC } from './Sec';


export default class Lvl1 extends Component {

    // [data, dd] = useDateCounter(0);

    render() {

        return (
            <div>
                 { '=>' } Level 1
                <hr />


                <hr />

                <SecondC />

                <hr />
                <Lvl2/>
            </div>
        )
    }


}