import React from "react";
import styled from "@emotion/styled/macro";
import withTheme from "../theme";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { useMutation } from "react-apollo-hooks";
import { SEND_EMAIL } from "../graphql";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const App = () => {
  const sendEmail = useMutation(SEND_EMAIL);

  return (
    <Layout>
      <Header />
      <main>
        <ContactForm
          onSubmit={data => sendEmail({ variables: { emailData: data } })}
        />
      </main>
      <Footer />
    </Layout>
  );
};

export default withTheme(App);
