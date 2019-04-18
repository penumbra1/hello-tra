import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as SvgLogo } from "./logo.svg";
import MenuButton from "./MenuButton";
import List from "./List";

const Logo = styled(SvgLogo)``;

const Header = props => {
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <header {...props}>
      <Logo />
      <MenuButton isOpen={isMenuOpen} onClick={() => toggleMenu(!isMenuOpen)} />
    </header>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 48px auto;

  ${MenuButton} {
    position: fixed;
    top: 0;
    right: 0;
    margin: 36px;
  }
`;
