import styled from "@emotion/styled";

const Input = styled.input`
  width: 366px;
  height: 42px;
  padding: 9px 14px;
  border-radius: 20px;
  border: ${props => `solid 1px rgba(${props.theme.mutedColorRgb}, 0.3)`};
  color: ${props => props.theme.textColor};
  transition: all 0.3s;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${props => props.theme.mutedColor};
  }
`;

export default Input;
