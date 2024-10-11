import { Outlet } from 'react-router-dom';

import {Navbar, Footer} from './shared';


import './App.css'

function App() {

  return (
    <div>
       <Navbar/>

       <div style={{height: '500px'}} >
          <Outlet/>
       </div>

       
       <Footer foot="foot" cont="foot"/>
    </div>
  )
}

export default App
