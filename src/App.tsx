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
import NoteDetail from "./components/NoteDetail/NoteDetail";
import ArchivedNotes from "./pages/main/ArchivedNotes/ArchivedNotes";
import Tags from "./pages/main/Tags/Tags";
import Search from "./pages/main/Search/Search";
import NewNote from "./components/NewNote/NewNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="/all" replace /> }, // redirect to all
      {
        path: "/all",
        element: <AllNotes />,
        handle: { title: "All Notes" },
        children: [
          { path: ":noteId", element: <NoteDetail /> },
          { path: "new-note", element: <NewNote />, handle: { isNewNote: true } },
        ],
      },
      {
        path: "/archived",
        element: <ArchivedNotes />,
        handle: { title: "Archived Notes" },
        children: [
          { path: ":noteId", element: <NoteDetail /> },
          { path: "new-note", element: <NewNote />, handle: { isNewNote: true } },
        ],
      },
      {
        path: "/tag",
        element: <Tags />,
        handle: { title: "Notes Tagged:" },
        children: [
          {
            path: ":tagId",
            element: null,
            children: [
              { path: ":noteId", element: <NoteDetail /> },
              { path: "new-note", element: <NewNote />, handle: { isNewNote: true } },
            ],
          },
        ],
      },
      {
        path: "/search",
        element: <Search />,
        handle: { title: "Showing results for:" },
        children: [
          { path: ":noteId", element: <NoteDetail /> },
          { path: "new-note", element: <NewNote />, handle: { isNewNote: true } },
        ],
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
