import React from "react";
import { configure, addDecorator } from "@storybook/react";
import withTheme from "../src/theme";

function loadStories() {
  require("../src/stories");
}

const themeDecorator = story => {
  const ThemedStory = withTheme(() => story());
  return <ThemedStory />;
};

addDecorator(themeDecorator);

configure(loadStories, module);
