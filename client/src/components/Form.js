import styled from "@emotion/styled/macro";
import { inputStyles } from "./Input";

export default styled.form`
  max-width: 366px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;

  & > * {
    flex: 100% 1 1;
    margin: 10px 0;
  }

  h1 {
    font-family: "Roobert";
    font-size: 28px;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 36px;
  }

  textarea {
    ${inputStyles}
    resize: none;
  }

  [type="submit"] {
    margin-top: 36px;
  }
`;
