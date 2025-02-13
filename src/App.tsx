import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./null_styles.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PostInfo from "./components/PostInfo/PostInfo";
import Posts from "./components/Posts/Posts";
import SighnIn from "./components/SignIn/SighnIn";
import { store } from "./store/store";

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
      {
        path: "/signin",
        element: <SighnIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
