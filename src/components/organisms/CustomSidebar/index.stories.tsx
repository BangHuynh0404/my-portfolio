import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import CustomSidebar from '.';

export default {
  title: 'Components/organisms/CustomSidebar',
  component: CustomSidebar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof CustomSidebar>;

const Template: ComponentStory<typeof CustomSidebar> = (args) => <CustomSidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};