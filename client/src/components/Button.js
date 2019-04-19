import styled from "@emotion/styled/macro";

const Button = styled.button`
  width: 366px;
  height: 42px;
  padding: 11px;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  transition: box-shadow 0.15s ease-out;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: ${props =>
      `0 5px 10px 0 rgba(${props.theme.textColorRgb}, 0.4)`};
  }

  &,
  &:active {
    box-shadow: ${props =>
      `0 5px 10px 0 rgba(${props.theme.textColorRgb}, 0.2)`};
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: ${props =>
      `0 4px 8px 0 rgba(${props.theme.textColorRgb}, 0.2)`};
  }
`;

export default Button;
