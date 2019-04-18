import React, { Component } from "react";
import withTheme from "./theme";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    );
  }
}

export default withTheme(App);
