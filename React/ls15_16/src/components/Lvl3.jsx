import { useContext } from "react"

import { useDateCounter } from '../custom-hooks/Counter';
import { NewContext } from '../App';



export const Lvl3 = () => {

        const data = useContext(NewContext)
        const { counter, setCounter, date } = useDateCounter()

    return (
        <div>
          { '===>' }  Lvl3

            <button onClick={() => setCounter(Math.random())}> SET RANDOM COUNT </button>
          <p>
            { counter }
          </p>
          <p>
            Random Counter was updated at: { date }
          </p>
          <p>
            { data }
          </p>

        </div>
    )
}