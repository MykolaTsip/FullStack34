import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Posts, User, Portal, Ref } from './components'


export const ExampleContext = createContext();

function App() {

  return (
    <div>
  
  
      <User/>
      <hr />
      <div style={{display: 'flex'}} >
        <Posts />
        <Posts />
        <Posts />
      </div>
      <hr />
      <hr />

      <Ref/>
      <hr />
      <hr />
      <ExampleContext.Provider value={999999999}>
        <Portal/>
      </ExampleContext.Provider>
    </div>
  )
}

export default App
