import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import { Car2, Car } from './Car';
// import Unknown from './Car';

import { Navbar } from './components/Navbar';
import Cont from './components/Content';
import Counter from './components/counter/Counter';
import Footer from './components/Footer';

// const Car = reqire('./Car.js');

const footClass = 'foot'
const contClass = 'cont'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    {/* <App />
    <Car/>
    { Car() }
    <Car2/>
    <Car/>
    <Unknown/> */}

    <Navbar/>
    <Cont title="Here will contetn" htm={<div> Hello world <b> FFF ffff</b> <i> SKfk dnjsnj dbjkg bdsk </i> </div>} />
    <hr/>
    <Cont title="SJJJJJ" children={1} >
      <div> Hello world <b> FFF ffff</b> <i> SKfk dnjsnj dbjkg bdsk </i> </div>
    </Cont>
    <Footer foot={footClass} cont={contClass} />
    {/* { Footer(footClass, contClass) } */}
    <hr/>
    <Footer foot={'dddd'} cont={'ffff'} />

    {/* <div> Hello world <b> FFF ffff</b> <i> SKfk dnjsnj dbjkg bdsk </i> </div> */}
    <hr/>

    <Counter/>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
