import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Error } from './shared';

import { Users, Posts, User } from './pages';

import App from './App.jsx'

const laz = () => import('./pages/Posts.jsx').then(file => ({Component: file.Posts}))
// const laz1 = async () => await import('./pages/Posts.jsx')



const myRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/users',
        Component: Users

      },
      // {
      //   path: '/users/:id',
      //   Component: User
      // },
      {
        path: '/users/:id/:randomN',
        Component: User
      },
      {
        path: '/posts',
        // Component: Posts
        loader: () => <div> Loading ....</div>,
        // lazy: laz
        lazy: async () => {
          const { Posts } = await import('./pages/Posts.jsx');
          return {Component: Posts}
        }
      },
    ]
  },
  {
    path: '/hello',
    element: <h2> Hello Page </h2>
  },
  // {
  //   path: '/users',
  //   Component: Users
  // },
  // {
  //   path: '/posts',
  //   Component: Posts
  // },
  {
    path: '*',
    Component: Error

  }
])


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <div></div>
  // { myRoutes }
  // <myRoutes/>


  <RouterProvider router={myRoutes} />
)
