import { useState } from "react";
import "./App.css";
import Notification from "./components/Notification";
import Login from "./components/Login";
import Logout from "./components/Logout";

const App = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <>
      <div className="app">
        <Notification message={errorMessage} />
        <h1>UdiPay</h1>
        <div>
          {user && (
            <Logout
              username={user.name}
              loggedUser={setUser}
              message={setErrorMessage}
            />
          )}
          {!user && <Login loggedUser={setUser} message={setErrorMessage} />}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
          laboriosam?
        </p>
      </div>
    </>
  );
};

export default App;
