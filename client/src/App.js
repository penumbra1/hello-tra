import React, { Component } from "react";
import styled from "@emotion/styled/macro";

const Header = styled.h1`
  color: rebeccapurple;
`;

class App extends Component {
  render() {
    return <Header>Hi there!</Header>;
  }
}

export default App;
