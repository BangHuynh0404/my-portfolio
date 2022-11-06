import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from "storybook-addon-react-router-v6";
import React from 'react';

import InfoCard from '.';

export default {
  title: 'Components/organisms/InfoCard',
  component: InfoCard,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  argTypes: {}
} as ComponentMeta<typeof InfoCard>;

const Template: ComponentStory<typeof InfoCard> = (args) => <InfoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};