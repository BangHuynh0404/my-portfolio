import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import React from "react";

import CustomNavbar from ".";

export default {
  title: "Components/organisms/CustomNavbar",
  component: CustomNavbar,
  decorators: [withRouter],
  parameters: {
    // layout: "centered",
  },
  argTypes: {},
} as ComponentMeta<typeof CustomNavbar>;

const Template: ComponentStory<typeof CustomNavbar> = (args) => (
  <div style={{ width: "100%" }}>
    <CustomNavbar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
