// PACKAGES
import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// SERVICES
import history from "../../services/history";

// COMPONENTS
import NavBar from "../navbar/NavBar";

const Confirmation = () => {
  const email = "ltn18@case.edu";
  const notes = useRef();

  const handleSubmit = () => {
    console.log(notes.current.value);
  };

  return (
    <Router history={history}>
      <div style={{ fontFamily: "Roboto" }}>
        <NavBar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column", overflowWrap: "break-word" }}>
            <div>
              <h1 style={{ color: "#006400" }}>Confirmation Page</h1>
              <div
                style={{
                  border: "1px solid black",
                  padding: 10,
                  marginBottom: 30,
                }}
              >
                <h2>Your appointment's information</h2>
                <p>
                  <b>With:</b> Lam Nguyen
                </p>
                <p>
                  <b>Contact:</b> {email}
                </p>
                <p>
                  <b>Time:</b> 9:00 AM
                </p>
                <p>
                  <b>Location:</b> 1107B
                </p>
                <p style={{ fontWeight: "bold", color: "red", width: 400 }}>
                  Make sure to arrive in-time for the appointment!
                </p>
              </div>
              <p>
                <b>Notes before meeting (300 characters max)</b>
              </p>
              <textarea
                maxlength="300"
                type="text"
                ref={notes}
                name="notes"
                style={{
                  width: 400,
                  height: 125,
                  overflowWrap: "break-word",
                }}
              />
              <p>
                <button
                  style={{ width: 100, height: 27 }}
                  onClick={handleSubmit}
                >
                  SUBMIT
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Confirmation;
