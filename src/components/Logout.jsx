import { useState } from "react";

const Logout = (props) => {

    const handleLogout = (event) => {
    event.preventDefault();
    props.loggedUser(null);
    props.message(null);
  };

  return (
    <div>
      {props.name}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
