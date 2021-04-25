import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { AnchorLink } from './AnchorLink';

export default {
  title: 'Atoms/Typography/AnchorLink',
  component: AnchorLink,
};

const Template: Story<ComponentProps<typeof AnchorLink>> = (args) => (
  <AnchorLink {...args}>{args.children}</AnchorLink>
);

export const AnchorLinkComponent = Template.bind({});
AnchorLinkComponent.storyName = 'default';
AnchorLinkComponent.args = {
  children: 'anchor link',
  onPress: () => console.log('ok'),
};
