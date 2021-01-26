// PACKAGES
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

// COMPONENTS
import NavBar from "../navbar/NavBar";

// SERVICES
import history from "../../services/history";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();
  const [isDoctor, setIsDoctor] = useState(false);
  const [skill, setSkill] = useState();
  const [skillTags, setSkillTags] = useState([]);
  const [condition, setCondition] = useState();
  const [conditionTags, setConditionTags] = useState([]);

  const handleSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(confirmPassword.current.value);
    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(address.current.value);
    if (isDoctor) {
      console.log("Skills");
      console.log(skillTags);
    } else {
      console.log("Conditions:");
      console.log(conditionTags);
    }
  };

  const handleAddTag = () => {
    if (isDoctor && skill !== "") {
      setSkillTags([...skillTags, skill]);
      setSkill("");
    }
    if (!isDoctor && condition !== "") {
      setConditionTags([...conditionTags, condition]);
      setCondition("");
    }
  };

  return (
    <Router history={history}>
      <div style={{ fontFamily: "Roboto" }}>
        <NavBar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>Register An Account</h1>
              <p style={{ fontWeight: "bold" }}>Email</p>
              <input
                type="email"
                ref={email}
                name="email"
                style={{ width: 400, height: 20 }}
              />
              <p style={{ fontWeight: "bold" }}>Password</p>
              <input
                type="password"
                ref={password}
                name="password"
                style={{ width: 400, height: 20 }}
              />
              <p style={{ fontWeight: "bold" }}>Confirm Password</p>
              <input
                type="password"
                ref={confirmPassword}
                name="confirm-password"
                style={{ width: 400, height: 20 }}
              />
              <p style={{ fontWeight: "bold" }}>First Name</p>
              <input
                type="text"
                ref={firstName}
                name="first-name"
                style={{ width: 400, height: 20 }}
              />
              <p style={{ fontWeight: "bold" }}>Last Name</p>
              <input
                type="text"
                ref={lastName}
                name="last-name"
                style={{ width: 400, height: 20 }}
              />
              <p style={{ fontWeight: "bold" }}>Address</p>
              <textarea
                type="text"
                maxlength="200"
                ref={address}
                name="address"
                style={{
                  width: 400,
                  height: 100,
                  overflowWrap: "break-word",
                }}
              />
              <p>
                <input
                  type="checkbox"
                  name="is-doctor"
                  value={isDoctor}
                  style={{ height: 15, width: 15 }}
                  onChange={() => setIsDoctor(!isDoctor)}
                />
                <span style={{ fontWeight: "bold", color: "#006400" }}>
                  Are you a doctor?
                </span>
              </p>
              {isDoctor ? (
                <div>
                  <p style={{ fontWeight: "bold" }}>Your Expertise</p>
                  <p style={{ fontStyle: "italic" }}>
                    Ex: General, Dermatology, ...
                  </p>
                  <div>
                    <input
                      type="text"
                      value={skillTags}
                      onChange={(e) => setSkill(e.target.value)}
                      style={{ width: 320, height: 20 }}
                    />
                    <button
                      style={{ width: 80, height: 25 }}
                      onClick={handleAddTag}
                    >
                      Add Tag
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p style={{ fontWeight: "bold" }}>Your Medical Conditions</p>
                  <p style={{ fontStyle: "italic" }}>Ex: Cough, Flu, ...</p>
                  <div>
                    <input
                      type="text"
                      maxlength="25"
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      style={{ width: 320, height: 20 }}
                    />
                    <button
                      style={{ width: 80, height: 25 }}
                      onClick={handleAddTag}
                    >
                      Add Tag
                    </button>
                  </div>
                  <p>
                    {
                      conditionTags.map((e) => (
                      <span style={{ marginRight: 5 }}>
                        <button>
                          <span style={{ marginRight: 5 }}>{e}</span>
                          <span style={{ color: "red", fontWeight: "bold" }}>
                            X
                          </span>
                        </button>
                      </span>
                    ))}
                  </p>
                </div>
              )}
              <p>
                <button
                  style={{
                    width: 100,
                    height: 27,
                    color: "white",
                    backgroundColor: "#006400",
                  }}
                  onClick={handleSubmit}
                >
                  REGISTER
                </button>
              </p>
              <p>
                Already have an account?&nbsp;&nbsp;
                <span
                  onClick={() => history.push("/login")}
                  style={{ textDecoration: "underline", cursor: "pointer", color: "#006400" }}
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
