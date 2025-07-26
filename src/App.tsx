import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/main/Home/Home';
import Login from './pages/auth/Login/Login';

const router = createBrowserRouter([
  {path: '/', element: <Login />},
  {path: '/login', element: <Login />},
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
