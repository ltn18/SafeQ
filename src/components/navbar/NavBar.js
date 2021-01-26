// PACKAGES
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// SERVICES
import history from "../../services/history";

const NavBar = () => {
  return (
    <Router history={history}>
      <div>
        <button
          onClick={() => history.push("/home")}
          className="backButton"
          style={{ backgroundColor: "#006400" }}
        >
          <span style={{ fontSize: 18 }}>
            <i class="fa fa-home"></i>&nbsp;Home
          </span>
        </button>
      </div>
    </Router>
  );
};

export default NavBar;
