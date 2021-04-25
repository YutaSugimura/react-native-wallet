import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from './';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' } },
};

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.storyName = 'default';
ButtonComponent.args = {
  text: 'label',
  onPress: () => {},
};
