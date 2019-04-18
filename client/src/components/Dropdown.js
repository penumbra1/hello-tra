import React from "react";
import Downshift from "downshift";
import styled from "@emotion/styled/macro";
import Input from "./Input";
import { ReactComponent as SvgArrow } from "./select.svg";

const Arrow = styled(SvgArrow)``;

const DropdownWrapper = styled.div`
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    transform-origin: top;
    transform: ${props => `scaleY(${props.isOpen ? 1 : 0})`};
  }

  li {
    padding: 8px 16px;
    transition: opacity 0.15s;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    cursor: default;

    &:last-child {
      padding-bottom: 16px;
    }
  }
`;

const Dropdown = ({
  items,
  onChange,
  itemToString,
  getItemValue,
  field,
  placeholder
}) => (
  <Downshift onChange={onChange} itemToString={itemToString}>
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
      <DropdownWrapper {...getRootProps({ isOpen: isOpen })}>
        <label {...getLabelProps({ className: "visually-hidden" })}>
          {field}
        </label>
        <Input {...getInputProps({ field, placeholder })} />
        <Arrow />
        <ul {...getMenuProps()}>
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
        </ul>
      </DropdownWrapper>
    )}
  </Downshift>
);

export default Dropdown;
