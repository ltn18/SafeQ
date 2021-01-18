import React, {useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleSubmit = () => {
    console.log(email + " " + password + " " + confirmPassword + " " + firstName + " " + lastName);
  }

  return (
    <Router>
      <div style={{ fontFamily: "Roboto" }}>
        <Link to="/home">
          <button className="backButton">
            <span style={{ fontSize: 18 }}>Return Home</span>
          </button>
        </Link>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>Register An Account</h1>
              <p>Email</p>
              <input type="email" onChange={handleEmail} name="email" style={{width: 300, height: 20}}/>
              <p>Password</p>
              <input type="password" onChange={handlePassword} name="password" style={{width: 300, height: 20}}/>
              <p>Confirm Password</p>
              <input type="password" onChange={handleConfirmPassword} name="confirm-password" style={{width: 300, height: 20}}/>
              <p>First Name</p>
              <input type="text" onChange={handleFirstName} name="first-name" style={{width: 300, height: 20}}/>
              <p>Last Name</p>
              <input type="text" onChange={handleLastName} name="last-name" style={{width: 300, height: 20}}/>
              <p>
                <button style={{width: 100, height: 27}} onClick={handleSubmit}>REGISTER</button>
              </p>
              <p>
                Already have an account?&nbsp;&nbsp;
                <Link to="/login">
                  <span style={{textDecoration: "underline"}}>Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};



export default Register;
