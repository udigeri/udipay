import { useState } from "react";
import loginService from "../services/login";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        email,
        password,
      });
      props.loggedUser(user);
    } catch (err) {
      console.log(err);
      if (err.code === "ERR_NETWORK") props.message(err.message);
      else props.message("Wrong crdedentials");

      setTimeout(() => {
        props.message(null);
      }, 3000);
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleLogin} method="POST">
        <div>
          <input
            type="email"
            name="Email"
            placeholder="email"
            autoFocus
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="Password"
            placeholder="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
