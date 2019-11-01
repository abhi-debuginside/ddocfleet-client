import React, { Component } from "react";
import Hello from "./components/Hello";
import CreateClinic from "./components/clinic/CreateClinic";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      // https://www.wix.com/website-template/view/html/653
      // https://material-ui.com/getting-started/usage/
      <div>
        <Hello name={this.state.name} />
        <CreateClinic />
        <p>
          Start editing to see some magic happen11 :)
        </p>
        
      </div>
    );
  }
}

export default App;
