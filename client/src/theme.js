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
  errorColor: "#ff1133",
  errorColorRgb: "255, 17, 51"
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

  @font-face {
    font-family: "Roobert";
    src: local("Roobert"),
      url("./fonts/RoobertTRIAL-SemiBold.otf") format("opentype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  * {
    font-family: "LabGrotesque", sans-serif;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.41;
    letter-spacing: 0.2px;
    box-sizing: border-box;
    transition: all 0.2s;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
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
