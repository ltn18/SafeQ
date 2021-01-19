import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import history from "../../services/history";

const NavBar = () => {
  const handleBackButton = () => {
    history.back();
  };

  const handleHomeButton = () => {
    history.push("/home");
  };

  return (
    <Router history={history}>
      <div>
        <button
          onClick={handleBackButton}
          className="backButton btn"
          style={{ backgroundColor: "red" }}
        >
          <span style={{ fontSize: 18 }}>
            <i class="fa fa-arrow-left"></i>&nbsp;Back
          </span>
        </button>
        <button
          onClick={handleHomeButton}
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
