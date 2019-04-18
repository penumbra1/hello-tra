import React from "react";
import Downshift from "downshift";
import styled from "@emotion/styled/macro";
import Input from "./Input";
import List from "./List";
import { ReactComponent as SvgArrow } from "./select.svg";

const Arrow = styled(SvgArrow)``;

const DropdownRoot = styled.div`
  width: 366px;
  position: relative;

  ${Input} {
    ${props =>
      props.isOpen && `transition: border-color 0s; border-color: transparent;`}
  }

  &::after {
    content: "";
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    position: absolute;
    top: 0;
    pointer-events: none;
    border-radius: 20px;
    border: 1px solid;
    border-color: ${props => props.theme.mutedColor};
    opacity: ${props => (props.isOpen ? 1 : 0)};
  }

  ${Arrow} {
    position: absolute;
    top: 20px;
    right: 20px;
    stroke: ${props =>
      props.isOpen
        ? props.theme.mutedColor
        : `rgba(${props.theme.mutedColorRgb}, 0.3)`};
    transition: transform 0.1s ease-out, opacity 0.1s linear;
    transform: ${props => `rotate(${props.isOpen ? "180deg" : 0})`};
  }
`;

const Dropdown = ({ items, onChange, itemToString, getItemValue, label }) => (
  <Downshift {...{ onChange, itemToString }}>
    {({
      getRootProps,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      theme
    }) => (
      <DropdownRoot {...getRootProps({ isOpen })}>
        <label {...getLabelProps({ className: "visually-hidden" })}>
          {label}
        </label>
        <Input {...getInputProps({ label, extra: <Arrow /> })} />
        <List {...getMenuProps({ isOpen })}>
          {isOpen
            ? items
                .filter(
                  item =>
                    !inputValue ||
                    getItemValue(item)
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: getItemValue(item),
                      index,
                      item,
                      style: {
                        opacity: highlightedIndex === index ? 1 : 0.6
                      }
                    })}
                  >
                    {getItemValue(item)}
                  </li>
                ))
            : null}
        </List>
      </DropdownRoot>
    )}
  </Downshift>
);

export default Dropdown;
