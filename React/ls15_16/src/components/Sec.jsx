import { useContext } from "react";
import { NewContext } from '../App';

import { useDateCounter } from '../custom-hooks/Counter';

export const SecondC = () => {

    const dataFromApp = useContext(NewContext);

    const { counter, setCounter, date } = useDateCounter(0)

    return (
        <div>
            Data from CONTEXT: <b> { dataFromApp }  </b>

            <hr />

            <p>
                Youe count is
            </p>
            { counter }
            <button onClick={() => setCounter(counter+1)}> PLUS </button>
            <button onClick={() => setCounter(counter+1)}> MINUS </button>
            <p>
                Count update at: { date }
            </p>

            <hr />

        </div>
    )
}