// PACKAGES
import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// SERVICES
import history from "../../services/history";

// COMPONENTS
import NavBar from "../navbar/NavBar";
import Signout from "../navbar/Signout";

const Settings = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();
  const medicalConditions = useRef();

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
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <NavBar />
          <Signout />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>UPDATE PROFILE</h1>
              <p>Email</p>
              <input
                type="email"
                ref={email}
                name="email"
                style={{ width: 400, height: 20 }}
              />
              <p>Password</p>
              <input
                type="password"
                ref={password}
                name="password"
                style={{ width: 400, height: 20 }}
              />
              <p>Confirm Password</p>
              <input
                type="password"
                ref={confirmPassword}
                name="confirm-password"
                style={{ width: 400, height: 20 }}
              />
              <p>First Name</p>
              <input
                type="text"
                ref={firstName}
                name="first-name"
                style={{ width: 400, height: 20 }}
              />
              <p>Last Name</p>
              <input
                type="text"
                ref={lastName}
                name="last-name"
                style={{ width: 400, height: 20 }}
              />
              <p>Address</p>
              <textarea
                type="text"
                maxlength="250"
                ref={medicalConditions}
                name="medicalConditions"
                style={{
                  width: 400,
                  height: 100,
                  overflowWrap: "break-word",
                }}
              />
              <p>
                <button
                  style={{ width: 100, height: 27, color: "white", backgroundColor: "#006400" }}
                  onClick={handleSubmit}
                >
                  UPDATE
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Settings;
