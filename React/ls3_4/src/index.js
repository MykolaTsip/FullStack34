import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const a = 11111111;
const b = { d: 222, f: 333 }
// let b = `${a}

const pr = 'dd'
//  prompt('ddd')


function BB () {

  return <div>
    Hello BBB
  </div>
}


const FF = React.createElement('b', null, 'MD f fgfgfg')



// let an = document.getElementById('ddd');
// an.innerText = a;

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />

    <h1> JJJJJJj dsmgfsdnlkgjk </h1>
    <p> Lorem dsfmksd ksgsj </p>

      { a }

      <hr />

      {/* { b } */}

      { b.d } - { b.f }

      <div>
        { pr }
      </div>

      <hr/>
    fdsfsdfsdfsd
    <hr/>

    <BB/>
    <BB/>
    <BB></BB>
    { BB() }


    {React.createElement('div', '', 'dsf dsgsdg jsfnj')}
    { FF }
  </div>
);
