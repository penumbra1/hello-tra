import React, { Component } from "react";
import withTheme from "./theme";
import Button from "./Button";
import Input from "./Input";
import PageHeader from "./PageHeader";

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <Input />
        <Button onClick={() => console.log("HI")}>Hi there!</Button>
      </>
    );
  }
}

export default withTheme(App);
