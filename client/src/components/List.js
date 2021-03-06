import styled from "@emotion/styled/macro";

export default styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  transform-origin: top;
  transform: ${props => `scaleY(${props.isOpen ? 1 : 0})`};
  background: ${props => props.theme.backgroundColor};

  li {
    padding: 8px 16px;
    transition: opacity 0.1s linear;
    opacity: ${props => (props.isOpen ? 0.6 : 0)};
    cursor: default;

    &:last-child {
      padding-bottom: 16px;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
