import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Form from "../components/Form";

storiesOf("Header", module).add("text", () => <Header />);

storiesOf("Footer", module).add("text", () => <Footer />);

storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Submit</Button>
));

storiesOf("Input", module).add("text", () => (
  <Input placeholder="Full name" onChange={action("changed")} />
));

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

storiesOf("Form", module).add("text", () => (
  <Form title="Form" onSubmit={action("submitted")} />
));
