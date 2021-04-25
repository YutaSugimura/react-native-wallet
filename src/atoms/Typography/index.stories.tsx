import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Typography } from './index';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

const Template: Story<ComponentProps<typeof Typography>> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

export const ButtonComponent = Template.bind({});
ButtonComponent.storyName = 'default';
ButtonComponent.args = {
  children: 'text text',
};
