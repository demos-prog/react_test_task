import { Outlet, useNavigate } from "react-router-dom";
import { useGetAllPostsQuery } from "../../api/posts";
import css from "./HomePage.module.css";

const  HomePage:React.FC = () => {
  const { data: posts, isLoading, error } = useGetAllPostsQuery();
  const navigate = useNavigate();

  console.log(posts);
  
  return (
    <>
      <div id={css.wrapper}>
        <h1>Header</h1>
        <Outlet />
      </div>
    </>
  );
}

export default HomePage;
