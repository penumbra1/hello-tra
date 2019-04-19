import React from "react";
import styled from "@emotion/styled/macro";
import Link from "./Link";

const Footer = props => {
  return (
    <footer {...props}>
      <p className="copyright">
        Copyright © 2018, Tra Robotics ltd. All rights reserved.
      </p>
      <p>
        <Link href="#">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default styled(Footer)`
  margin-top: 48px;
  margin-bottom: 36px;

  * {
    font-size: 13px;
    text-align: center;
  }

  .copyright {
    opacity: 0.8;
  }
`;
