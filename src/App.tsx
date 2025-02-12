import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./null_styles.css";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import PostInfo from "./components/PostInfo/PostInfo";
import Posts from "./components/Posts/Posts";
import { Provider } from 'react-redux';
import { store } from './store';

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

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
