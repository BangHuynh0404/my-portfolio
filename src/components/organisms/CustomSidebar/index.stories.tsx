import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import React from "react";

import CustomSidebar from ".";

export default {
  title: "Components/organisms/CustomSidebar",
  component: CustomSidebar,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} as ComponentMeta<typeof CustomSidebar>;

const Template: ComponentStory<typeof CustomSidebar> = (args) => (
  <CustomSidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
