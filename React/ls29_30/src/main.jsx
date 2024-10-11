import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';

import { MyOwnStore } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={MyOwnStore}>
    <App />
  </Provider>
)
