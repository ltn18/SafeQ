// PACKAGES
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// SERVICES
import history from "../../services/history";

const Signout = () => {
  const [username, setUsername] = useState("Lam");

  return (
    <Router history={history}>
      <div style={{ marginRight: 30, marginTop: 15 }}>
        <p style={{ fontSize: 20 }} className="typewriter">
          Welcome, {username}!
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{ marginTop: 5, fontSize: 20 }}
            onClick={() => history.push("/settings")}
          >
            <i className="fa fa-id-card"></i>&nbsp; Settings
          </button>
          <button
            style={{ marginTop: 5, fontSize: 20 }}
            onClick={() => history.push("/home")}
          >
            <i className="fa fa-sign-out"></i>&nbsp; Logout
          </button>
        </div>
      </div>
    </Router>
  );
};

export default Signout;
