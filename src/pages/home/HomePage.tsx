import { Outlet, useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();

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
