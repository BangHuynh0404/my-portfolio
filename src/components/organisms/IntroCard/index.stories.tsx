import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import React from "react";

import IntroCard from ".";

export default {
  title: "Components/organisms/IntroCard",
  component: IntroCard,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} as ComponentMeta<typeof IntroCard>;

const Template: ComponentStory<typeof IntroCard> = (args) => (
  <IntroCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
