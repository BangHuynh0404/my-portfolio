import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};