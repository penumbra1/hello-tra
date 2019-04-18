import styled from "@emotion/styled/macro";

const Link = styled.a`
  color: ${props => props.theme.mutedColor};
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.textColor};
  }
`;

export default Link;
