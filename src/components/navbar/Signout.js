import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import history from "../../services/history";

const Signout = () => {
  const [username, setUsername] = useState("Lam");

  const handleSignout = () => {
    history.push("/home");
  };

  const handleSettings = () => {
    history.push("/settings");
  };

  return (
    <Router history={history}>
      <div style={{ marginRight: 30, marginTop: 15 }}>
        <p style={{ fontSize: 20 }} className="typewriter">
          Welcome, {username}!
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{ marginTop: 5, fontSize: 20 }}
            onClick={handleSettings}
          >
            <i className="fa fa-id-card"></i>&nbsp;
            Settings
          </button>
          <button
            style={{ marginTop: 5, fontSize: 20 }}
            onClick={handleSignout}
          >
            <i className="fa fa-sign-out"></i>&nbsp;
            Logout
          </button>
        </div>
      </div>
    </Router>
  );
};

export default Signout;
