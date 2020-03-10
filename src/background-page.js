import * as React from "react";
import { render } from "react-dom";
import { Componentx } from "./componentx";
import Componentxjs from "./componentxjs";
import { ClassComponentx } from "./classcomponentx";

class Background extends React.Component {
  render() {
    return (
      <>
        <Componentx>popup</Componentx>
        <ClassComponentx>popuuup</ClassComponentx>
        <Componentxjs>popup</Componentxjs>
      </>
    );
  }
}

render(<Background />, document.getElementById("app"));
