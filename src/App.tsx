import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/main/Home/Home';
import Login from './pages/auth/Login/Login';
import ForgotPassword from './pages/auth/ForgotPassword/ForgotPassword';

const router = createBrowserRouter([
  {path: '/', element: <Login />},
  {path: '/login', element: <Login />},
  {path: '/forgot-password', element: <ForgotPassword />},
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
