import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import withTheme from "../theme";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useMutation } from "react-apollo-hooks";
import { SEND_EMAIL } from "../graphql";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100vw;
`;

const App = () => {
  const sendEmail = useMutation(SEND_EMAIL);

  return (
    <Layout>
      <Header />
      <main>
        <Form
          onSubmit={data => sendEmail({ variables: { emailData: data } })}
        />
      </main>
      <Footer />
    </Layout>
  );
};

export default withTheme(App);
