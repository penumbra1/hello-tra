import styled from "@emotion/styled";

const Input = styled.input`
  width: 366px;
  height: 42px;
  padding: 9px 14px;
  border-radius: 20px;
  border: ${props => `solid 1px rgba(${props.theme.mutedColorRgb}, 0.3)`};
  color: ${props => props.theme.textColor};
  line-height: 1.41;
  transition: all 0.3s;

  &::placeholder {
    color: ${props => `rgba(${props.theme.mutedColorRgb}, 0.6)`};
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${props => props.theme.mutedColor};
  }
`;

export default Input;
