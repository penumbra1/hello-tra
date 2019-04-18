/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled/macro";
import css from "@emotion/css/macro";
import { jsx } from "@emotion/core";

const wrapperStyles = css`
  position: relative;
`;

const extraStyles = css`
  position: absolute;
  right: 20px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.1s ease-out, opacity 0.1s linear;
`;

const ErrorIndicator = styled.span`
  color: ${props => props.theme.errorColor};
`;

const Input = ({ label, extra, error, ...props }) => (
  <div css={wrapperStyles}>
    <input placeholder={label} aria-label={label} {...props} />
    <div css={extraStyles}>
      {error ? <ErrorIndicator children="•" /> : extra}
    </div>
  </div>
);

export default styled(Input)`
  width: 366px;
  padding: 8px 16px;
  border-radius: 20px;
  border: ${props => `solid 1px rgba(${props.theme.mutedColorRgb}, 0.3)`};
  outline: none;
  box-shadow: ${props =>
    props.error ? `0 0 5px 0 rgba(${props.theme.errorColorRgb}, 0.4)` : "none"};
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
`;
