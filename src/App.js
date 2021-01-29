import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./LoginForm";
import Admin from "./Admin.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <h1>Assignment</h1>
      <Router>
      <Switch>
        <Route exact path="/" component={LoginForm}></Route>
        <Route exact path="/Admin" component={Admin}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;