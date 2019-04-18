import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import withTheme from "../theme";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100vw;
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <main>
          <Form onSubmit={console.log} />
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default withTheme(App);
