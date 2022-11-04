import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from "storybook-addon-react-router-v6";
import React from 'react';

import ChatBubble from '.';

export default {
  title: 'Components/organisms/ChatBubble',
  component: ChatBubble,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof ChatBubble>;

const Template: ComponentStory<typeof ChatBubble> = (args) => <ChatBubble {...args} />;

export const Primary = Template.bind({});
Primary.args = {};