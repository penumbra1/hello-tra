import React from "react";
import Downshift from "downshift";
import styled from "@emotion/styled/macro";
import Input from "./Input";
import List from "./List";
import { ReactComponent as SvgArrow } from "./select.svg";

const Arrow = styled(SvgArrow)``;

const DropdownWrapper = styled.div`
  position: relative;

  ${Input} {
    ${props =>
      props.isOpen &&
      `transition: border-color 0s; border-color: transparent;`};

    &:focus {
      ${props => props.isOpen && `transition: border-color 0s;`}
    }
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  ${Arrow} {
    stroke: ${props =>
      props.isOpen
        ? props.theme.mutedColor
        : `rgba(${props.theme.mutedColorRgb}, 0.3)`};
    transform: ${props => `rotate(${props.isOpen ? "180deg" : 0})`};
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    padding-top: 42px;
    margin-top: -42px;
    position: absolute;
    top: 0;
    border-radius: 20px;
    border: 1px solid;
    border-color: ${props => props.theme.mutedColor};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    pointer-events: none;
    z-index: 2;
  }
`;

const Dropdown = ({
  items,
  onChange,
  getItemValue = item => item,
  label,
  ...props
}) => (
  <Downshift
    onChange={onChange}
    itemToString={getItemValue}
    defaultHighlightedIndex={0}
  >
    {({
      getRootProps,
      getInputProps,
      getToggleButtonProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      theme
    }) => (
      <DropdownWrapper {...getRootProps({ isOpen, ...props })}>
        <label {...getLabelProps({ className: "visually-hidden" })}>
          {label}
        </label>

        <Input
          {...getInputProps({
            label,
            extra: (
              <button {...getToggleButtonProps()}>
                <Arrow />
              </button>
            )
          })}
        />

        <ListWrapper isOpen={isOpen}>
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
              : []}
          </List>
        </ListWrapper>
      </DropdownWrapper>
    )}
  </Downshift>
);

export default Dropdown;
