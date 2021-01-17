import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

import Home from "./Home";
import Attend from "./Attend";
import Schedule from "./Schedule";
import Login from "./Login";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/attend" component={Attend}></Route>
      <Route exact path="/schedule" component={Schedule}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Router>
  )
};

export default App;
