// PACKAGES
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// SERVICES
import history from "../../services/history";

const Home = () => {
  const [login, setLogin] = useState(false);

  return (
    <Router history={history}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            overflowWrap: "break-word",
            width: 1100,
            textAlign: "justify",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <img
              src="safeq.png"
              alt="OKOK"
              style={{ width: 250, height: 250 }}
            />
          </div>
          <h1 className="typewriter">
            <span style={{ color: "#006400" }}>SafeQ Inc.</span> - the best
            solution for queueing during Covid-19
          </h1>
          <p style={{ fontSize: 22, fontWeight: "bold" }}>Mission:</p>
          <p style={{ fontSize: 22 }}>
            Realizing that social distancing has been one of the hottest topic
            in the past 2 years, my team has developed{" "}
            <span style={{ color: "#006400", fontWeight: "bold" }}>SafeQ</span>.
            This solution enables people to arrive just-in-time for
            appointments, which significantly minimizes crowdedness of any
            office. SafeQ guarantees safe queueing environments! Last but not
            least, thank you so much for using our product. Your support is
            crucial to social goods and to our further development. Feedbacks
            can be sent via{" "}
            <a href="mailto:safeqinc@gmail.com">safeqinc@gmail.com</a>. We would
            love to know what you think about SafeQ.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={() => history.push(login ? "/attend" : "/login")} className="button">
              <img
                src="attend.png"
                alt="attend.png"
                style={{ width: 75, height: 75 }}
              />
              <h2>Attend</h2>
            </button>
            <button
              onClick={() => history.push(login ? "/schedule" : "/login")}
              className="button"
            >
              <img
                src="schedule.png"
                alt="schedule.png"
                style={{ width: 75, height: 75 }}
              />
              <h2>Schedule</h2>
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
