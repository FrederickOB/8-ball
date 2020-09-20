import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./tailwind.output.css";

import Home from "./Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
