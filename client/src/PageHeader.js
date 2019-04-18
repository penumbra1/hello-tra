import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { ReactComponent as SvgLogo } from "./logo.svg";
import MenuButton from "./MenuButton";

const Logo = styled(SvgLogo)``;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Logo} {
    margin: 72px auto;
  }

  ${MenuButton} {
    position: fixed;
    top: 0;
    right: 0;
    margin: 36px;
  }
`;

const PageHeader = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <Header>
      <Logo />
      <MenuButton isOpen={isMenuOpen} onClick={() => toggleMenu(!isMenuOpen)} />
    </Header>
  );
};

export default PageHeader;
