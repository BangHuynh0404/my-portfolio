import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import CustomNavbar from '.';

export default {
  title: 'Components/organisms/CustomNavbar',
  component: CustomNavbar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof CustomNavbar>;

const Template: ComponentStory<typeof CustomNavbar> = (args) => <CustomNavbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};