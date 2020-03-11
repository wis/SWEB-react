import * as React from "react";
import { render } from "react-dom";
import Componentxjs from "./componentxjs";

class Background extends React.Component {
  render() {
    return (
      <>
        <Componentxjs>popup</Componentxjs>
      </>
    );
  }
}

render(<Background />, document.getElementById("app"));