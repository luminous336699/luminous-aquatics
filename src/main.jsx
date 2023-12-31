import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/header/Header.jsx';
import Shop from './components/shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [


      // Temporary deployment code
      {
        path: "/",
        element: <Shop></Shop>
      }

      // Working code
      // {
      //   path: "/shop",
      //   element: <Shop></Shop>
      // },
      // {
      //   path: "/orders",
      //   element: <Orders></Orders>
      // },
      // {
      //   path: "/inventory",
      //   element: <Inventory></Inventory>
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
