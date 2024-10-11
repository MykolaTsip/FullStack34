import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { User, Posts, Comments, UserDetail } from './components';
import { Navbar, Footer, Error } from './semantic';


import './App.css'


// const LazyFormPage = () => import('./components/MyForma').then(file => ({Component: file.MyForma}));
// const LazyFormPage1 = () => import('./components/MyForma').then(file =>  file.MyForma)

const JSS = () => import('./components/MyForma').then(file => ({Component: file.default}));



const Hello = () => (
  <div>
    Hello world
  </div>
)

function App() {

  return (
    <BrowserRouter>
      <div style={{position: 'relative', height: '100vh'}}>
          {/* <MyForma/> */}
        <Navbar/>

        <Routes>
          <Route
            path='/'
            // Component={Hello}
            element={<h1> Hello wordl </h1>}
          />
          <Route path='*' Component={Error} />
          {/* <Route path='*' redirect={} */}
          <Route path='/users' Component={User} />

          {/* {
            [1, 2, 3, 4].map((val) => {
              <Route path={'/users/' + val} Component={UserDetail}  key={val} />
            })
          } */}

          <Route path='/users/:id' Component={UserDetail} />




          <Route path='/posts' Component={Posts}/>
          <Route path='/comments' element={<Comments/>} loader={async () => (<div> LOAD DATA</div>)} />
          <Route path='/forma' lazy={JSS()} />
        </Routes>

        <Footer foot="foot" cont="foot"/>
      </div>
    </BrowserRouter>
  )
}

export default App


          {/* Hello world
          <h2> Users </h2>
          <User/>
          <hr />
          <hr />

          <h2> Posts </h2>

          <Posts/>

          <hr />
          <hr />

          <h2> Comments </h2>
          <Comments/> */}
