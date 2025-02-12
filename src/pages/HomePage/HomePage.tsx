import { Outlet, useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id={css.wrapper}>
        <header>
          <h1>Some Blog</h1>
          <button onClick={() => navigate("/sighnin")}>Sighn in</button>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
