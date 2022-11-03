import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import CardPatient from ".";

export default {
  title: "Components/organisms/CardPatient",
  component: CardPatient,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} as ComponentMeta<typeof CardPatient>;

const Template: ComponentStory<typeof CardPatient> = (args) => (
  <CardPatient {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
