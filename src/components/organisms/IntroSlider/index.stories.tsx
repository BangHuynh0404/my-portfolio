import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from "storybook-addon-react-router-v6";
import React from 'react';

import IntroSlider from '.';

export default {
  title: 'Components/organisms/IntroSlider',
  component: IntroSlider,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof IntroSlider>;

const Template: ComponentStory<typeof IntroSlider> = (args) => <IntroSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};