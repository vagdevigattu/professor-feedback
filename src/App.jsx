import Home from './pages/Home'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Feedback from './pages/Feedback'
import { NavLink,Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
         <Outlet></Outlet>
    </>
  )
}

export default App
