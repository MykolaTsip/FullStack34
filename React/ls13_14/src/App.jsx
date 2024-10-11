import { useState } from 'react';

import { Counter, Counter2 } from './components';

import './App.css'

function App() {

  let [isShowCounter, setStateCounter] = useState(true) 
    
  return (
    <div>
      Hello world
      <hr />

      <h3
        onClick={() => setStateCounter(!isShowCounter)}
      >
        { isShowCounter ? 'HIDE' : 'SHOW' }
      </h3>
      {/* { isShowCounter && <Counter/> } */}
      <hr />

      <Counter2/>
    </div>
  )
}

export default App
