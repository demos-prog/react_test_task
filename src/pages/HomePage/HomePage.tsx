import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store"; // You'll need to create this type
import { logout } from "../../store/userSlice";
import css from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <div id={css.wrapper}>
      <header>
        <h1>Some Blog</h1>
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.userName}!</span>
            <button className={css.signBtn} onClick={() => dispatch(logout())}>
              Log out
            </button>
          </>
        ) : (
          <button className={css.signBtn} onClick={() => navigate("/signin")}>
            Sign in
          </button>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default HomePage;
