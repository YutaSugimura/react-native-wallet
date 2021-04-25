import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './index';

describe('renders correctly', () => {
  it('atoms/Button (default)', () => {
    const tree = renderer.create(<Button text="button click" onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('atoms/Button (props)', () => {
    const tree = renderer
      .create(
        <Button
          text="button click"
          onPress={() => {}}
          width={360}
          height={60}
          backgroundColor="#1C1C1C"
          pressedBackgroundColor="#1C1C1C"
          borderColor="#1C1C1C"
          borderWidth={1}
          borderRadius={12}
          fontColor="#1C1C1C"
          fontSize={15}
          fontWeight="700"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
