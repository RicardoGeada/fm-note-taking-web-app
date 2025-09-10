import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/main/Home/Home';
import Login from './pages/auth/Login/Login';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword/ResetPassword';
import Signup from './pages/auth/Signup/Signup';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/login', element: <Login />},
  {path: '/forgot-password', element: <ForgotPassword />},
  {path: '/reset-password', element: <ResetPassword />},
  {path: '/signup', element: <Signup/>},
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
