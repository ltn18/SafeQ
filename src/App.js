import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from "./components/home/Home";
import Attend from "./components/attend/Attend";
import Schedule from "./components/schedule/Schedule";
import Login from "./components/auth/Login";
import Confirmation from "./components/attend/Confirmation";
import ForgetPassword from "./components/auth/ForgetPassword";
import Register from "./components/auth/Register";

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
