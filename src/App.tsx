import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./null_styles.css";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PostInfo from "./components/PostInfo/PostInfo";
import Posts from "./components/Posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Posts />,
      },
      {
        path: "/post/:id",
        element: <PostInfo />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
