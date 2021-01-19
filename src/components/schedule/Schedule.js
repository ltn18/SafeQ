import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory, useLocation } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Signout from "../navbar/Signout";

const Schedule = () => {
  const [from, setFrom] = useState(8);
  const [to, setTo] = useState(8);
  const [duration, setDuration] = useState(5);
  const [username, setUsername] = useState("Lam");
  const history = useHistory();
  // const prev = useState(useLocation().pathname);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSignout = () => {
    
  }

  const handleSchedule = () => {
    console.log(history);
    if (to <= from) console.log("Invalid working hour!");
    else {
      console.log(from + " " + to + " " + duration);
      console.log("Successful Schedule");
    }
  };

  const handleBackButton = () => {
    history.pop();
    console.log(history)
  };

  const handleHomeButton = () => {
    history.push("/home");
  };

  return (
    <Router>
      <div style={{ fontFamily: "Roboto" }}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <NavBar />
          <Signout />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flexDirection: "column" }}>
            <div>
              <h1>Schedule Office Hour</h1>
              
              <div style={{display: "flex", marginBottom: 20}}>
                <p style={{ marginRight: 10 }}>Date</p>
                <input type="date"/>
              </div>

              <div style={{ display: "flex", marginBottom: 20 }}>
                <p style={{ marginRight: 10 }}>From</p>
                <select
                  style={{ marginRight: 10 }}
                  name="from"
                  onChange={handleFromChange}
                >
                  <option value={8}>8:00 AM</option>
                  <option value={9}>9:00 AM</option>
                  <option value={10}>10:00 AM</option>
                  <option value={11}>11:00 AM</option>
                  <option value={12}>12:00 PM</option>
                  <option value={13}>1:00 PM</option>
                  <option value={14}>2:00 PM</option>
                  <option value={15}>3:00 PM</option>
                  <option value={16}>4:00 PM</option>
                  <option value={17}>5:00 PM</option>
                  <option value={18}>6:00 PM</option>
                  <option value={19}>7:00 PM</option>
                  <option value={20}>8:00 PM</option>
                </select>
                <p style={{ marginLeft: 10 }}>To</p>
                <select
                  style={{ marginLeft: 10 }}
                  name="to"
                  onChange={handleToChange}
                >
                  <option value={8}>8:00 AM</option>
                  <option value={9}>9:00 AM</option>
                  <option value={10}>10:00 AM</option>
                  <option value={11}>11:00 AM</option>
                  <option value={12}>12:00 PM</option>
                  <option value={13}>1:00 PM</option>
                  <option value={14}>2:00 PM</option>
                  <option value={15}>3:00 PM</option>
                  <option value={16}>4:00 PM</option>
                  <option value={17}>5:00 PM</option>
                  <option value={18}>6:00 PM</option>
                  <option value={19}>7:00 PM</option>
                  <option value={20}>8:00 PM</option>
                </select>
              </div>

              <div style={{ display: "flex", marginBottom: 10 }}>
                <p><b>Estimated Meeting Time:</b> 15 minutes</p>
              </div>

              {/* <div style={{ display: "flex", marginBottom: 20 }}>
                <p style={{ marginRight: 10 }}>Duration of a meeting</p>
                <select name="duration" onChange={handleDurationChange}>
                  <option value={5}>5 minutes</option>
                  <option value={10}>10 minutes</option>
                  <option value={15}>15 minutes</option>
                  <option value={20}>20 minutes</option>
                  <option value={25}>25 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={35}>35 minutes</option>
                  <option value={40}>40 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={50}>50 minutes</option>
                  <option value={55}>55 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div> */}

              {/* <p>
                <b>
                  Estimated meetings count:{" "}
                  <span style={{ color: "red" }}>
                    {to - from <= 0
                      ? 0
                      : Math.trunc(((to - from) * 60) / duration)}
                  </span>
                </b>
              </p> */}

              <button
                style={{ width: 100, height: 50, marginTop: 10 }}
                onClick={handleSchedule}
              >
                SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Schedule;
