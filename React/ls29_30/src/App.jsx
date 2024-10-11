

import Count from './components/Count';
import Plus from './components/Plus';

import { Minus, Zero, Users } from './components';

import './App.css'

function App() {

  return (
   <>
    <Plus/>
    <Count/>

    <hr />
    <Minus/>
    <hr />
    <Zero/>
    <hr />

    <Users/>
   </>
  )
}

export default App
