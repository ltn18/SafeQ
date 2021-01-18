import React, {useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    console.log(email);
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
              <h1>Reset Password</h1>
              <p>Email</p>
              <input type="email" onChange={handleEmailChange} name="email" style={{width: 300, height: 20}}/>
              <p>
                <button style={{width: 100, height: 27}} onClick={handleSubmit}>RESER</button>
              </p>
              <p>
                Don't have an account?&nbsp;&nbsp;
                <Link to="/register">
                  <span style={{textDecoration: "underline"}}>Register</span>
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
