import {  useState, useEffect, useLayoutEffect,  useCallback, useMemo, useReducer, useContext, createContext, useId, useRef  } from 'react'

import Lvl1 from './components/Lvl1';

import './App.css'

export const NewContext = createContext()


const state = {}

function reducer(state, action) {
  switch (action) {
    case 'ss': return {...state, d: 1}
  }
}


function App() {

  const [numb, setNum] = useState(0);
  const [numb1, setNum1] = useState(0);
  const [numb2, setNum2] = useState(0);


  useEffect(() => {
    console.log(2222);

    return () => { console.log(333); }
  }, [numb, numb1])

  const setN1 =  useCallback(() => setNum1(1), [numb1]);

  const setN2 = useMemo(() => setNum2(2), [numb2])

  const [stateFromReducer, dispatch] = useReducer(reducer, state)

  const any = useId()

  const getPTag = useRef();


  // console.log(getPTag);

  // setTimeout(() => console.log(getPTag), 500)


  return (
    <div>
      App.js
      <p ref={getPTag}  >
        { any }

        <button onClick={() => console.log(getPTag.current)}> Log this TAG as HTML El </button>
        <button onClick={() => console.log(getPTag)}> Log this TAG as OBJ El </button>

      </p>
      <div>
        { [1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <div key={el}>
            { useId() }
          </div>
        )) }
      </div>
      <hr />

      <NewContext.Provider value={'Hello world'} >
        <Lvl1/>
      </NewContext.Provider >

    </div>
  )
}

export default App
