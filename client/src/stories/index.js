import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "../Button";
import Input from "../Input";
import PageHeader from "../PageHeader";
import Dropdown from "../Dropdown";

storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Submit</Button>
));

storiesOf("Input", module).add("text", () => (
  <Input placeholder="Full name" onChange={action("changed")} />
));

storiesOf("Page header", module).add("text", () => <PageHeader />);

const cities = [
  { title: "London, UK", id: "london" },
  { title: "Berlin, Germany", id: "berlin" },
  { title: "St. Petersburg, Russia", id: "petersburg" }
];
storiesOf("Dropdown", module).add("text", () => (
  <Dropdown
    items={cities}
    itemToString={item => (item ? item.title : "")}
    getItemValue={item => item && item.title}
    onChange={item => action(`selected ${item}`)}
    label="Select a city"
  />
));
