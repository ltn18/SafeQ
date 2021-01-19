// PACKAGES
import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// SERVICES
import history from "../../services/history";

// COMPONENTS
import NavBar from "../navbar/NavBar";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    console.log(email.current.value + " " + password.current.value);
  };

  return (
    <Router history={history}>
      <div style={{ fontFamily: "Roboto" }}>
        <NavBar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>Login</h1>
              <p>Email</p>
              <input
                type="email"
                ref={email}
                name="email"
                style={{ width: 300, height: 20 }}
              />
              <p>Password</p>
              <input
                type="password"
                ref={password}
                name="password"
                style={{ width: 300, height: 20 }}
              />
              <p>
                <button
                  style={{ width: 100, height: 27 }}
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </p>
              <p
                onClick={() => history.push("/forget-password")}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Forgot your password?
              </p>
              <p>
                Don't have an account?&nbsp;&nbsp;
                <span
                  onClick={() => history.push("/register")}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Login;
