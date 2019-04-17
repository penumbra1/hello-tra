import styled from "@emotion/styled";

const Button = styled.button`
  width: 366px;
  height: 42px;
  padding: 11px;
  border-radius: 4px;
  border: none;
  box-shadow: ${props => `0 5px 10px 0 rgba(${props.theme.textColorRgb}, 0.2)`};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: ${props =>
      `0 5px 10px 0 rgba(${props.theme.textColorRgb}, 0.4)`};
  }
`;

export default Button;
