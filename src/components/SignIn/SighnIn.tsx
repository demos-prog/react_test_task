import { useState } from "react";
import css from "./SignIn.module.css";

const SighnIn: React.FC = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className={css.formWrapper}>
      <form>
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
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SighnIn;
