import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Saludo from './components/Saludo.jsx'
import Color from './components/Color.jsx'

const router = createBrowserRouter([
{
  path:'/inicio',
  element: <App />
},
{
  path:'/hola',
  element:<Saludo />
},
{
  path:'/color',
  element: <Color />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
