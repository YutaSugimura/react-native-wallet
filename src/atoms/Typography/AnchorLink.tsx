import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Color, FontWeight } from '../../types/styles';
import { COLORS } from '../../common/styleguide';

const styles = StyleSheet.create({
  font: {
    textDecorationLine: 'underline',
  },
});

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  fontColor?: Color;
  fontSize?: number;
  fontWeight?: FontWeight;
  underLineColor?: Color;
};

export const AnchorLink: React.FC<Props> = ({
  children,
  onPress,
  fontColor,
  fontSize,
  fontWeight,
  underLineColor,
}) => {
  const fontStyle = {
    color: fontColor ? fontColor : COLORS.FONT_LINK_BLUE,
    fontSize: fontSize ? fontSize : 14,
    fontWeight: fontWeight ? fontWeight : '400',
    lineHeight: 24,
    textDecorationColor: underLineColor ? underLineColor : COLORS.FONT_LINK_BLUE,
  };
  return (
    <Text style={[styles.font, fontStyle]} allowFontScaling={false} onPress={onPress}>
      {children}
    </Text>
  );
};
