import * as React from "react";
import { render } from "react-dom";
import { Componentx } from "../componentx";
import { ClassComponentx } from "../classcomponentx";

class Popup extends React.Component {
  render() {
    return (
      <>
        <Componentx>popup</Componentx>
        <ClassComponentx>popuuup</ClassComponentx>
      </>
    );
  }
}

render(<Popup />, document.getElementById("app"));
