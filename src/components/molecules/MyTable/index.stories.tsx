import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import MyTable from '.';

export default {
  title: 'Components/molecules/MyTable',
  component: MyTable,
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof MyTable>;

const Template: ComponentStory<typeof MyTable> = (args) => <MyTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};