import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import Root from './Layout/Root.jsx';
import Home from './components/Pages/Home.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import About from './components/Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'login',
        Component: Login
      },{
        path: 'register',
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='md:max-w-6xl mx-auto sm:px-6'>
     <RouterProvider router={router}></RouterProvider>
   </div>
  </StrictMode>,
)
