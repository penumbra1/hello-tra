import React, { Component } from "react";
import withTheme from "./theme";
import Button from "./Button";
import Input from "./Input";

class App extends Component {
  render() {
    return (
      <>
        <Input />
        <Button onClick={() => console.log("HI")}>Hi there!</Button>
      </>
    );
  }
}

export default withTheme(App);
