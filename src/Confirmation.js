import React, {useState} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Confirmation = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    console.log(email + " " + password);
  }

  const handleNotes = () => {

  }

  return (
    <Router>
      <div style={{ fontFamily: "Roboto" }}>
        <Link to="/home">
          <button className="backButton">
            <span style={{ fontSize: 18 }}>Return Home</span>
          </button>
        </Link>
        {
          login?
          <div style={{ display: "flex", justifyContent: "center"}}>
            <div style={{ flexDirection: "column", overflowWrap: "break-word" }}>
              <div>
                <h1 style={{color: "#006400"}}>Confirmation Page</h1>
                <div style={{border: "1px solid black", padding: 10, marginBottom: 30}}>
                  <h2>Your appointment's information</h2>
                  <p><b>With:</b> Lam Nguyen</p>
                  <p><b>Time:</b> 9:00 AM</p>
                  <p><b>Location:</b> 1107B</p>
                  <p style={{fontWeight: "bold", color: "red", width: 400}}>Make sure to arrive in-time for the appointment!</p>
                </div>
                <p><b>Notes before meeting (300 characters max)</b></p>
                <textarea maxlength="300" type="text" onChange={handleEmailChange} name="notes" style={{width: 400, height: 125, overflowWrap: "break-word"}}/>
                <p>
                  <button style={{width: 100, height: 27}} onClick={handleSubmit}>SUBMIT</button>
                </p>
              </div>
            </div>
          </div>
          : 
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ flexDirection: "column" }}>
              <div>
                <h1>Login</h1>
                <p>Email</p>
                <input type="email" onChange={handleEmailChange} name="email" style={{width: 300, height: 20}}/>
                <p>Password</p>
                <input type="password" onChange={handlePasswordChange} name="password" style={{width: 300, height: 20}}/>
                <p>
                  <button style={{width: 100, height: 27}} onClick={handleSubmit}>LOGIN</button>
                </p>
                <Link to="/forget-password">
                  <p style={{textDecoration: "underline"}}>Forgot your password?</p>
                </Link>
                <p>
                  Don't have an account?&nbsp;&nbsp;
                  <Link to="/register">
                    <span style={{textDecoration: "underline"}}>Register</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </Router>
  );
};



export default Confirmation;
