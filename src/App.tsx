import "./App.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/main/Home/Home";
import Login from "./pages/auth/Login/Login";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword/ResetPassword";
import Signup from "./pages/auth/Signup/Signup";
import AllNotes from "./pages/main/AllNotes/AllNotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="/all" replace /> }, // redirect to all
      {
        path: "/all",
        element: <AllNotes />,
        handle: { title : "All Notes" },
        children: [{ path: ":noteId", element: null }],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
