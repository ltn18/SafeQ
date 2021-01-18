import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

import Home from "./components/Home";
import Attend from "./components/Attend";
import Schedule from "./components/Schedule";
import Login from "./components/Login";
import Confirmation from "./components/Confirmation";
import ForgetPassword from "./components/ForgetPassword";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/attend" component={Attend}></Route>
      <Route exact path="/schedule" component={Schedule}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/forget-password" component={ForgetPassword}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/:email/:slot" component={Confirmation}></Route>
    </Router>
  )
};

export default App;
