import { useState } from "react";


const USER_ENUM = {
    LOG: 'log',
    NUM: 'num',
    PASS: 'pass',
    REP: 'rep'
}


export function ControlForm () {
    const [user, setUser] = useState({});


    // const loginLog = (e) => {
    //     console.log(e);

    //     let logErr = false

    //     if (!e.target.checked) {
    //         logErr = true
    //     }

    //     setUser({...user, log: e.target.checked, logErr})

    // } 

    // const loginNum = (e) => {
    //     console.log(e);
    //     setUser({...user, num: e.target.value})
    // } 


    // const loginPass = (e) => {
    //     let passErr = false;

    //     if (e.target.value.length < 5) {
    //         passErr = true;
    //     }
    //     setUser({...user, pass: e.target.value, passErr})

    // } 


    // const loginRep = (e) => {
    //     setUser({...user, rep: e.target.value})

    // } 


    const changeUser = (val, fied) => {
        setUser({...user, [fied]: val })
    }


    const showForma = (e) => {
        e.preventDefault()
        // console.log(user[fied]);
        // console.log(user.fied);

        console.log(user);
    }

    const disableeBtn = () => {


        return user[USER_ENUM.LOG] && String(user[USER_ENUM.NUM]).length > 5 && user[USER_ENUM.PASS].length > 5 && user[USER_ENUM.PASS] === user[USER_ENUM.REP]
    }


    return (
        <div>

            <form className="sss">
                <div style={{margin: '10px'}}>
                    <label htmlFor="log" > LOGGG </label>
                    <input type="checkbox" id="log" onChange={(e) => changeUser(e.target.checked, USER_ENUM.LOG)} />
                    {
                        user.logErr && <div style={{color: 'red'}}> { 'Checkbox Error' } </div>
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="num"> NUmber </label>
                    <input type="number" id="num" onChange={(e) => changeUser(e.target.value, USER_ENUM.NUM)}  />
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="pass"> Password </label>
                    <input type="text" id="pass" onChange={(e) => changeUser(e.target.value, USER_ENUM.PASS)}  />
                    {
                        user.passErr && <div style={{color: 'red'}}> { 'Incorrect Password' } </div>
                    }
                </div>
                <div style={{margin: '10px'}}>
                    <label htmlFor="repat"> Repeat password </label>
                    <input type="text" id="repat" onChange={(e) => changeUser(e.target.value, USER_ENUM.REP)}  />
                </div>

                <input type="submit" disabled={!disableeBtn()} value={'Show data '} onClick={showForma} />
            </form>
        </div>
    )
}