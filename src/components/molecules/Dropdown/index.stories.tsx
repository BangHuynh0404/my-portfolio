import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Dropdown from '.';

export default {
  title: 'Components/molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {};