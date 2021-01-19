// PACKAGES
import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// SERVICES
import history from "../../services/history";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();

  const handleSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(confirmPassword.current.value);
    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(address.current.value);
  };

  return (
    <Router history={history}>
      <div style={{ fontFamily: "Roboto" }}>
        <button
          onClick={() => history.push("/home")}
          className="backButton btn"
          style={{ backgroundColor: "red" }}
        >
          <span style={{ fontSize: 18 }}>
            <i class="fa fa-arrow-left"></i>&nbsp;Back
          </span>
        </button>
        <button
          onClick={() => history.push("/home")}
          className="backButton"
          style={{ backgroundColor: "#006400" }}
        >
          <span style={{ fontSize: 18 }}>
            <i class="fa fa-home"></i>&nbsp;Home
          </span>
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>Register An Account</h1>
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
              <p>Confirm Password</p>
              <input
                type="password"
                ref={confirmPassword}
                name="confirm-password"
                style={{ width: 300, height: 20 }}
              />
              <p>First Name</p>
              <input
                type="text"
                ref={firstName}
                name="first-name"
                style={{ width: 300, height: 20 }}
              />
              <p>Last Name</p>
              <input
                type="text"
                ref={lastName}
                name="last-name"
                style={{ width: 300, height: 20 }}
              />
              <p>Address</p>
              <input
                type="text"
                ref={address}
                name="address"
                style={{ width: 300, height: 20 }}
              />
              <p>
                <button
                  style={{ width: 100, height: 27 }}
                  onClick={handleSubmit}
                >
                  REGISTER
                </button>
              </p>
              <p>
                Already have an account?&nbsp;&nbsp;
                <span
                  onClick={() => history.push("/login")}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Register;
