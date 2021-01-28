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
  const [skill, setSkill] = useState("");
  const [skillTags, setSkillTags] = useState([]);
  const [condition, setCondition] = useState("");
  const [conditionTags, setConditionTags] = useState([]);
  const [idSkill, setIdSkill] = useState(0);
  const [idCondition, setIdCondition] = useState(0);

  const handleSubmit = async () => {
    console.log("OK");
    try {
      await console.log("KO");
    } catch (err) {console.log(err)}
  };

  const handleAddTag = () => {
    if (isDoctor && skill !== "") {
      setSkillTags([...skillTags, { id: idSkill, val: skill }]);
      setIdSkill(idSkill + 1);
      setSkill("");
    }
    if (!isDoctor && condition !== "") {
      setConditionTags([...conditionTags, { id: idCondition, val: condition }]);
      setIdCondition(idCondition + 1);
      setCondition("");
    }
  };

  const handleEnterAddTag = (e) => {
    if (e.key == "Enter") {
      if (isDoctor && skill !== "") {
        setSkillTags([...skillTags, { id: idSkill, val: skill }]);
        setIdSkill(idSkill + 1);
        setSkill("");
      }
      if (!isDoctor && condition !== "") {
        setConditionTags([
          ...conditionTags,
          { id: idCondition, val: condition },
        ]);
        setIdCondition(idCondition + 1);
        setCondition("");
      }
    }
  };

  const handleRemoveTag = (ele) => {
    if (isDoctor) {
      if (ele.id !== -1) {
        setSkillTags(skillTags.filter((tag) => tag.id !== ele.id))
      }
    }
    if (!isDoctor) {
      console.log(ele.id);
      if (ele.id !== -1) {
        setConditionTags(conditionTags.filter((tag) => tag.id !== ele.id))
      }
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
                  resize: "none",
                }}
              />
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#006400",
                    marginRight: 10,
                  }}
                >
                  Are you a doctor?
                </span>
                <input
                  type="checkbox"
                  name="is-doctor"
                  value={isDoctor}
                  style={{ height: 13, width: 13, marginRight: 5 }}
                  onChange={() => setIsDoctor(!isDoctor)}
                />
                <span style={{ fontWeight: "bold" }}>Yes</span>
              </p>
              <div>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {isDoctor ? "Your Expertise" : "Your Medical Conditions"}
                  </span>
                  &nbsp;
                  <span style={{ fontStyle: "italic" }}>
                    {isDoctor
                      ? "(E.g. General, Dermatology, ...)"
                      : "(E.g. Cough, Flu, ...)"}
                  </span>
                </p>
                <div>
                  <input
                    type="text"
                    maxlength="22"
                    value={
                      isDoctor
                        ? skill === null
                          ? ""
                          : skill
                        : condition === null
                        ? ""
                        : condition
                    }
                    placeholder="22 characters max"
                    onChange={(e) =>
                      isDoctor
                        ? setSkill(e.target.value)
                        : setCondition(e.target.value)
                    }
                    style={{ width: 320, height: 20 }}
                    onKeyPress={handleEnterAddTag}
                  />
                  <button
                    style={{
                      width: 80,
                      height: 26,
                    }}
                    onClick={handleAddTag}
                  >
                    Add Tag
                  </button>
                </div>
                <p
                  style={{
                    width: 400,
                    overflowWrap: "break-word",
                  }}
                >
                  {isDoctor
                    ? skillTags.map((ele) => (
                        <span style={{ marginRight: 5 }}>
                          <button onClick={() => handleRemoveTag(ele)}>
                            <span style={{ marginRight: 5 }}>{ele.val}</span>
                            <span style={{ color: "red", fontWeight: "bold" }}>
                              X
                            </span>
                          </button>
                        </span>
                      ))
                    : conditionTags.map((ele) => (
                        <span style={{ marginRight: 5 }}>
                          <button onClick={() => handleRemoveTag(ele)}>
                            <span style={{ marginRight: 5 }}>{ele.val}</span>
                            <span style={{ color: "red", fontWeight: "bold" }}>
                              X
                            </span>
                          </button>
                        </span>
                      ))}
                </p>
              </div>

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
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#006400",
                  }}
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
