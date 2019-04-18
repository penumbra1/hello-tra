import React from "react";
import styled from "@emotion/styled/macro";
// Adapted from Hamburgers by Jonathan Suh @jonsuh
// https://github.com/jonsuh/hamburgers

const MenuButton = ({ isOpen, ...buttonProps }) => (
  <button type="button" {...buttonProps}>
    <span>
      <div />
    </span>
  </button>
);

export default styled(MenuButton)`
  --padding: 15px;
  --layer-width: 28px;
  --layer-height: 2px;
  --layer-spacing: 6px;
  --layer-offset: calc(var(--layer-spacing) + var(--layer-height));
  --layer-color: ${props => props.theme.textColor};
  --layer-border-radius: 4px;
  --hover-opacity: 0.6;

  padding: var(--padding);
  display: inline-block;
  cursor: pointer;
  transition: opacity 0.15s linear;

  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  outline: none;

  &:hover,
  &:active {
    opacity: var(--hover-opacity);
  }

  span {
    width: var(--layer-width);
    height: calc(var(--layer-height) * 3 + var(--layer-spacing) * 2);
    display: block;
    position: relative;
  }

  div {
    top: 50%;
    margin-top: calc(var(--layer-height) / -2);

    &,
    &::before,
    &::after {
      width: var(--layer-width);
      height: var(--layer-height);
      background-color: var(--layer-color);
      border-radius: var(--layer-border-radius);
      position: absolute;
    }

    &::before,
    &::after {
      content: "";
      display: block;
      transition: transform 0.08s ease-out, opacity 0s 0.08s linear;
    }

    &::before {
      transform: ${({ isOpen }) =>
        `translateY(${isOpen ? 0 : "calc(var(--layer-offset) * -1)"} )`};
    }

    &::after {
      transform: ${({ isOpen }) =>
        `translateY(${isOpen ? 0 : "var(--layer-offset)"} )`};
    }
  }
`;
