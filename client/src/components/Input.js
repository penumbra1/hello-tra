import React from "react";
import styled from "@emotion/styled/macro";

const Input = ({ label, extra, ...props }) => (
  <>
    <input placeholder={label} aria-label={label} {...props} />
    {extra}
  </>
);

export default styled(Input)`
  width: 366px;
  padding: 8px 16px;
  border-radius: 20px;
  border: ${props => `solid 1px rgba(${props.theme.mutedColorRgb}, 0.3)`};
  outline: none;
  color: ${props => props.theme.textColor};
  line-height: 1.41;
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.mutedColor};
  }

  &::placeholder {
    color: ${props => `rgba(${props.theme.mutedColorRgb}, 0.6)`};
  }

  & +
`;
