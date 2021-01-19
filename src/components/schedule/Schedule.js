// PACKAGES
import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// SERVICES
import history from "../../services/history";

// COMPONENTS
import NavBar from "../navbar/NavBar";
import Signout from "../navbar/Signout";

const Schedule = () => {
  const from = useRef();
  const to = useRef();
  const date = useRef();

  const handleSchedule = () => {
    if (date.current.valueAsDate != null) {
      console.log(date.current.value.toString().split("-").slice(0, 4).map(i => parseInt(i)));
      console.log(date);
    }
    console.log(from.current.value + " " + to.current.value);
    if (date.current.valueAsDate == null || parseInt(to.current.value) <= parseInt(from.current.value)) console.log("Invalid Schedule");
    else {
      console.log("Successful Schedule");
    }
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
              <h1>Schedule Office Hour</h1>
              
              <div style={{display: "flex", marginBottom: 20}}>
                <p style={{ marginRight: 10 }}>Date</p>
                <input type="date" ref={date}/>
              </div>

              <div style={{ display: "flex", marginBottom: 20 }}>
                <p style={{ marginRight: 10 }}>From</p>
                <select
                  style={{ marginRight: 10 }}
                  name="from"
                  ref={from}
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
                  ref={to}
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
