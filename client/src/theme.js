import React from "react";
import { Global } from "@emotion/core";
import css from "@emotion/css/macro";
import { ThemeProvider } from "emotion-theming";

const theme = {
  textColor: "#161e2e",
  textColorRgb: "22, 30, 46",
  mutedColor: "#737882",
  mutedColorRgb: "115, 120, 130",
  backgroundColor: "#ffffff",
  border: "solid 1px #737882"
};

const globalStyles = css`
  @font-face {
    font-family: "LabGrotesque";
    src: local("LabGrotesque"),
      url("./fonts/LabGrotesque-Regular.woff") format("woff");
    /* font-weight: 300; */
    font-style: normal;
    font-stretch: normal;
  }

  * {
    font-family: "LabGrotesque", sans-serif;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.2px;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default Component => {
  const WrappedComponent = props => (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    </>
  );
  WrappedComponent.displayName =
    Component.displayName || Component.name || "Component";

  return WrappedComponent;
};
