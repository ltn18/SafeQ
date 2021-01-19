// PACKAGES
import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

// SERVICES
import history from "../../services/history";

// COMPONENTS
import NavBar from "../navbar/NavBar";
import Signout from "../navbar/Signout";

const Attend = () => {
  const [validSearch, setValidSearch] = useState(true);

  const [date, setDate] = useState(new Date().toISOString().substr(0,10));
  const from = useRef();
  const to = useRef();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  // Click on a card -> Redirect to a page of more information about doctors
  const handleDoctorCard = () => {
    // use history
  }

  const handleSearch = () => {
    const today = new Date().toISOString().substr(0,10).split("-").map(i => parseInt(i));
    const choice = date.split("-").map(i => parseInt(i));
    if (today[0] <= choice[0] && today[1] <= choice[1] && today[2] <= choice[2]) {
      setValidSearch(true);
    } else setValidSearch(false);
    console.log(validSearch);
    console.log(date.split("-"));
    console.log(from.current.value);
    console.log(to.current.value);
  }

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
              <h1>Search for Available Doctors</h1>
              
              <div style={{display: "flex", marginBottom: 20}}>
                <p style={{ marginRight: 10 }}>Date</p>
                <input value={date} type="date" onChange={handleDateChange}/>
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

              <div>
                <button style={{width: 100, height: 30}} onClick={handleSearch}>SEARCH</button>
              </div>

              {
                validSearch 
                ?
                <div>
                  <p></p>
                  <div style={{border: "1px solid black", padding: 10, marginTop: 20}} onClick={handleDoctorCard}>
                    <p><b>Name:</b> Lam Nguyen</p>
                    <p><b>Email:</b> ltn18</p>
                    <p><b>Address:</b> 1107B</p>
                    <p><b>Specialties:</b> General</p>
                  </div>
                </div>
                : 
                <div style={{marginTop: 30}}>
                  <b style={{color: "red", fontSize: 22}}>No Available Meetings</b>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Attend