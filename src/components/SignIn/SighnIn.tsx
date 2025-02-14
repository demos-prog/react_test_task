import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserMutation } from "../../api/users";
import css from "./SignIn.module.css";

const SighnIn: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [createUser, { isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  const notify = () =>
    toast.info("Username must be at least 3 characters long", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const errNotify = () =>
    toast.error("Failed to create user", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.length < 3) {
      notify();
      return;
    }
    try {
      const result = await createUser(userName).unwrap();
      if (result) {
        navigate("/");
      }
    } catch (err) {
      errNotify();
    }
  };

  return (
    <div className={css.formWrapper}>
      <form onSubmit={handleSubmit}>
        <p>Register</p>
        <input
          placeholder="Enter your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onBlur={(e) => {
            if (e.target.value.length < 3) notify();
          }}
          type="text"
          name="nameField"
          id="nameField"
          disabled={isLoading}
        />
        <input
          type="submit"
          value={isLoading ? "Registering..." : "Register"}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default SighnIn;
