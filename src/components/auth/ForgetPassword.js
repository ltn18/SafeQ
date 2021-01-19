import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import history from "../../services/history";

import NavBar from "../navbar/NavBar";

const ForgetPassword = () => {
  const email = useRef();

  const handleSubmit = () => {
    console.log(email.current.value);
  };

  return (
    <Router history={history}>
      <div style={{ fontFamily: "Roboto" }}>
        <NavBar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>Reset Password</h1>
              <p>Email</p>
              <input
                type="email"
                ref={email}
                name="email"
                style={{ width: 300, height: 20 }}
              />
              <p>
                <button
                  style={{ width: 100, height: 27 }}
                  onClick={handleSubmit}
                >
                  RESET
                </button>
              </p>
              <p>
                Don't have an account?&nbsp;&nbsp;
                <Link to="/register">
                  <span
                    onClick={() => history.push("/register")}
                    style={{ textDecoration: "underline" }}
                  >
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default ForgetPassword;
