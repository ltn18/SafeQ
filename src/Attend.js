import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Attend = () => {
  const [email, setEmail] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
              <h1>Search for Available Meetings</h1>
              <p>Email</p>
              <input type="email" onChange={handleEmailChange} name="email" style={{width: 500, height: 20}}/>
              {/* <button style={{height: 25, width: 75, marginLeft: 10}}>Find</button> */}
              {
                email 
                ?
                <div style={{border: "1px solid black", padding: 10, marginTop: 20}}>
                  <p><b>Name:</b> Lam Nguyen</p>
                  <p><b>Email:</b> {email}</p>
                  <p><b>Address:</b> 1107B</p>
                  <p>
                    <span><b>Available Slots: </b></span>
                    <ul>
                      <p><a href={`/${email}/9:00AM`}>9:00AM</a>&nbsp;&nbsp;</p>
                      <p><a href={`/${email}/9:00AM`}>9:00AM</a>&nbsp;&nbsp;</p>
                      <p><a href={`/${email}/9:00AM`}>9:00AM</a>&nbsp;&nbsp;</p>
                      <p><a href={`/${email}/9:00AM`}>9:00AM</a>&nbsp;&nbsp;</p>
                      <p><a href={`/${email}/9:00AM`}>9:00AM</a>&nbsp;&nbsp;</p>
                      <p><a href={`/${email}/9:00AM`}>9:00AM</a>&nbsp;&nbsp;</p>
                    </ul>
                  </p>
                </div>
                : <div></div>
              }
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Attend