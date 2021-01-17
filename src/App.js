import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
    </Router>
  )
};

export default App;
