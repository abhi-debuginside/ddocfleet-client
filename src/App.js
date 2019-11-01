import React, { Component } from "react";
import Hello from "./components/Hello";
import CreateClinic from "./components/clinic/CreateClinic";
import CopyRightInfo from "./components/common/CopyRightInfo";

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
      // https://github.com/only2dhir/react-js-material/tree/master/src
      // https://www.devglan.com/react-js/reactjs-material-ui-example
      <div>
        <Hello name={this.state.name} />
        <CreateClinic />
        <CopyRightInfo />
      </div>
    );
  }
}

export default App;
