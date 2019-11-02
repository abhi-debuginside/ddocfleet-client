import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 import Hello from "./Hello";
import CreateClinic from "./clinic/CreateClinic";


class AppRouter extends Component {
  // constuctor
  constructor() {
    super();
  }

  // render
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={CreateClinic} />
            <Route path="/hello" component={Hello} />            
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
