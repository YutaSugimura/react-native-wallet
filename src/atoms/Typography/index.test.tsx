import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Typography } from './index';

describe('renders correctly', () => {
  it('atoms/Typography (default)', () => {
    const tree = renderer.create(<Typography>text</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('atoms/Typography (props)', () => {
    const tree = renderer
      .create(
        <Typography fontColor="#1C1C1C" fontSize={12} fontWeight="700" lineHeight={16}>
          text
        </Typography>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
