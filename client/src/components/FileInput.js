import React from "react";
import styled from "@emotion/styled/macro";
import Link from "./Link";
import { ReactComponent as Paperclip } from "./attachment.svg";

const FileIndicator = styled(Paperclip)`
  width: 16px;
  fill: ${props => `${props.theme.textColor}`};
`;

const FileInput = ({ hasFile, className, ...inputProps }) => {
  return (
    <div className={className}>
      <Link as="label" htmlFor="attachment">
        Attach your CV
      </Link>
      <input
        type="file"
        id="attachment"
        className="visually-hidden"
        {...inputProps}
      />
      <FileIndicator />
    </div>
  );
};

export default styled(FileInput)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Link} {
    padding: 0 28px;
  }

  ${FileIndicator} {
    margin-left: -16px;
    transition: transform 0.1s ease-out, opacity 0.1s linear;
    opacity: ${props => (props.hasFile ? 1 : 0)};
    transform: ${props => `scale(${props.hasFile ? 1 : 0})`};
  }
`;
