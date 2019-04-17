import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Burger } from "./burger.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled(Burger)``;

const PageHeader = () => {
  return (
    <Header>
      <Logo />
      <MenuButton />
    </Header>
  );
};

export default PageHeader;
