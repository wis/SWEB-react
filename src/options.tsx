import * as React from "react";
import { render } from "react-dom";
import { Componentx } from "./componentx";

class Options extends React.Component {
  render() {
    return (
      <>
        <Componentx>optiton</Componentx>
      </>
    );
  }
}

render(<Options />, document.getElementById("app"));
