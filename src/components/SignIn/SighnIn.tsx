import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../api/users";
import css from "./SignIn.module.css";

const SighnIn: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [createUser, { isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.length < 3) {
      console.log("Username must be at least 3 characters long");
      return;
    }
    try {
      const result = await createUser(userName).unwrap();
      if (result) {
        navigate("/");
      }
    } catch (err) {
      console.log("Failed to create user:", err);
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
            if (e.target.value.length < 3) {
              alert("Username must be at least 3 characters long");
            }
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
