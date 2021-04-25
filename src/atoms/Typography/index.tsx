import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Color, FontWeight } from '../../types/styles';
import { FONT_DEFAULT_SIZE, COLORS } from '../../common/styleguide';

const styles = StyleSheet.create({
  container: {
    color: COLORS.FONT_BLACK,
    fontSize: FONT_DEFAULT_SIZE,
    fontWeight: '400',
  },
});

type Props = {
  children: React.ReactNode | string;
  fontColor?: Color;
  fontSize?: number;
  fontWeight?: FontWeight;
  lineHeight?: number;
  customStyles?: object;
};

export const Typography: React.FC<Props> = ({
  children,
  fontColor,
  fontSize,
  fontWeight,
  lineHeight,
  customStyles,
}) => {
  const fontStyle = {
    color: fontColor,
    fontSize,
    fontWeight,
    lineHeight,
    ...customStyles,
  };

  return (
    <Text style={[styles.container, fontStyle]} allowFontScaling={false}>
      {children}
    </Text>
  );
};
