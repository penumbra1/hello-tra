/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled/macro";
import css from "@emotion/css/macro";
import { jsx } from "@emotion/core";

const Input = ({ label, extra, error, ...props }) => (
  <div css={inputWrapperStyles}>
    <input placeholder={label} aria-label={label} {...props} />
    <div css={extraStyles}>{error ? <ErrorIndicator /> : extra}</div>
  </div>
);

const inputWrapperStyles = css`
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

export const ErrorIndicator = styled(props => <span {...props}>•</span>)`
  color: ${props => props.theme.errorColor};
  opacity: 0.9;
`;

export const inputStyles = props => css`
  width: 100%;
  padding: 8px 16px;
  border-radius: 20px;
  border: solid 1px rgba(${props.theme.mutedColorRgb}, 0.3);
  outline: none;
  box-shadow: ${props.error
    ? `0 0 6px 0 rgba(${props.theme.errorColorRgb}, 0.3)`
    : "none"};
  color: ${props.theme.textColor};
  line-height: 1.41;

  &:hover,
  &:focus {
    border-color: ${props.theme.mutedColor};
  }

  &::placeholder {
    color: rgba(${props.theme.mutedColorRgb}, 0.6);
  }
`;

export default styled(Input)`
  ${inputStyles}
`;
