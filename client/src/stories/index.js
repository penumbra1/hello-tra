import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../Button";
import Input from "../Input";
import PageHeader from "../PageHeader";

storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Submit</Button>
));

storiesOf("Input", module).add("text", () => (
  <Input placeholder="Full name" onChange={action("changed")} />
));

storiesOf("Page header", module).add("text", () => <PageHeader />);
