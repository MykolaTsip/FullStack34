import { useState, useRef } from 'react'


export function Forma () {

    const [val, setVal] = useState('');
    const [us, setUs] = useState({})

    const log = () => {
        console.log(in1, in2);
        console.log(in1.current.value, in2.current.value);
    }

    const in1 = useRef();
    const in2 = useRef();

    const myForma = useRef();

    const showForma = ($event) => {
        $event.preventDefault();
        console.log(myForma);

        const [log, number, pass, rep] = myForma.current;

        console.log(log.checked, number.value, pass.value, rep.value);

        let user = {
            log: log.checked,
            num: Number(number.value),
            pass: pass.value,
            rep: rep.value
        }

        setUs(user)
    }


    return (
        <div>

            <input type="text" ref={in1} />
            <input type="text" ref={in2} />
            <button onClick={log}> Show these fieleds</button>


            <form className="sss" ref={myForma}>
                <div style={{margin: '10px'}}>
                    <label htmlFor="log" > LOGGG </label>
                    <input type="checkbox" id="log" />
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="num"> NUmber </label>
                    <input type="number" id="num"  />
                    {
                        us.num < 10 && <div style={{color: 'red'}}> Error </div>
                    }
                    {/* {
                        myForma.current[1] && <div style={{color: 'red'}}> Error </div>
                    } */}
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="pass"> Password </label>
                    <input type="text" id="pass"  />
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="repat"> Repeat password </label>
                    <input type="text" id="repat"  />
                </div>

                <input type="submit" value={'Show data '} onClick={showForma} />
            </form>
        </div>
    )
}