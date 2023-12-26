import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Games from './pages/Games.tsx'
import Items from './pages/Items.tsx'
import Skins from './pages/Skins.tsx'
import Steam from './pages/Steam.tsx'
import Alt from './pages/Alt.tsx'
import PageItem from './pages/PageItem.tsx'
import RegLog from './pages/RegLog.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div> Not found </div>
  },
  {
    path: "/games",
    element: <Games />
  },
  {
    path: "/items",
    element: <Items />
  },
  {
    path: "/skins",
    element: <Skins />
  },
  {
    path: "/steam",
    element: <Steam />
  },
  {
    path: "/alt",
    element: <Alt />
  },
  {
    path: '/sign',
    element: <RegLog />
  },
  {
    path: "/item/:id",
    element: <PageItem />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
