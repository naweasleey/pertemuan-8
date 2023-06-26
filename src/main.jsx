import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './pages/Dashboard/index.jsx'
import DetailProduk from './pages/DetailProduk/index.jsx'
import About from './pages/About/index.jsx'
import Shop from './pages/Shop/index.jsx'
// import Header from './components/Header/index.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//SETUP AWAL ROUTER
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/detail-produk/:idProduk',
        element:<DetailProduk/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/shop',
        element: <Shop/>
      }



    ]
  }

  // {
  //   path: '/',
  //   element: <App/>
  // },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard/>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
