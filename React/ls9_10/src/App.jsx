import './App.css'

// import { Header } from './common/Header';
// import { Cont } from './common/Content';
// import { Footer } from './common/Footer';

import { Gello as GelloShared } from './shared/Gello';

import { Gello, Header, Cont as Content, Footer } from './common';

import Cat from './assets/image.png';

function App() {


  return (
    <div>

      <Header/>
      <hr />
      <Gello/>
      <GelloShared/>
      <hr />

      {/* <img src="./assets/image.png" alt="" />
      <img src="C:\Courses\FullStack34\React\ls9_10\src\assets\image.png" alt="" /> */}

      <img src={Cat} alt="" />

  
      <Content />

      <hr />
      <Footer/>

    </div>
  )
}

export default App
