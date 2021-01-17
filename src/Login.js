import React, {useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    console.log(email + " " + password);
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
              <h1>Login as Scheduler</h1>
              <p>Email</p>
              <input type="email" onChange={handleEmailChange} name="email" style={{width: 300, height: 20}}/>
              <p>Password</p>
              <input type="password" onChange={handlePasswordChange} name="password" style={{width: 300, height: 20}}/>
              <p>
                <button style={{width: 100, height: 27}} onClick={handleSubmit}>LOGIN</button>
              </p>
              <p style={{textDecoration: "underline"}}>Forgot your password?</p>
              <p>
                Don't have an account? <span style={{textDecoration: "underline"}}>Register</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};



export default Login;
