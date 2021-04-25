import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { AnchorLink } from './AnchorLink';

const onPress = () => {};

describe('renders correctly', () => {
  it('atoms/Typography/AnchorLink', () => {
    const tree = renderer.create(<AnchorLink onPress={onPress}>text</AnchorLink>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('atoms/Typography/AnchorLink (props)', () => {
    const tree = renderer
      .create(
        <AnchorLink
          onPress={onPress}
          fontColor="#1C1C1C"
          fontSize={20}
          fontWeight="bold"
          underLineColor="#1C1C1C"
        >
          text
        </AnchorLink>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
