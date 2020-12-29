import React from "react";
import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:name" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
