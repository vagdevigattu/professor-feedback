import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import NoPage from './pages/NoPage.jsx';
import Admin from './pages/Admin.jsx';
import Feedback from './pages/Feedback.jsx';

const router=createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path='/' element={<App/>}>
  //     <Route index element={<Login/>}></Route>
  //     <Route path='home' element={<Home/>}></Route>
  //     <Route path='admin'element={<Admin/>}></Route>
  //     <Route path='feedback'element={<Feedback/>}></Route>
  //     <Route path='*' element={<NoPage/>}></Route>

  //   </Route>
  // )
  [
    {
      path:'/' ,
      element:<Login/>
    },
    {
      path:'/home',
       element:<Home/>
    },
    {
      path:'/home/admin',
      element:<Admin/>
    },
    {
      path:'/home/feedback',
      element:<Feedback/>
    },
    
    {
      path:'*' ,
      element:<NoPage/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
