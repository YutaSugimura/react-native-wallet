import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Color, FontWeight } from '../../types/styles';
import { COLORS } from '../../common/styleguide';
import { Typography } from '../Typography';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  text: string;
  onPress: () => void;
  width?: number;
  height?: number;
  backgroundColor?: Color;
  pressedBackgroundColor?: Color;
  borderColor?: Color;
  borderWidth?: number;
  borderRadius?: number;
  fontColor?: Color;
  fontSize?: number;
  fontWeight?: FontWeight;
};

export const Button: React.FC<Props> = ({
  text,
  onPress,
  width,
  height,
  backgroundColor,
  pressedBackgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  fontColor,
  fontSize,
  fontWeight,
}) => {
  const buttonStyle = {
    width: width ? width : 300,
    height: height ? height : 46,
    backgroundColor: backgroundColor ? backgroundColor : COLORS.WHITE,
    borderColor: borderColor ? borderColor : COLORS.BUTTON_BORDER,
    borderWidth: borderWidth ? borderWidth : 1,
    borderRadius: borderRadius ? borderRadius : 0,
  };

  const buttonPressedStyle = {
    backgroundColor: pressedBackgroundColor,
    opacity: 0.3,
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, buttonStyle, pressed && buttonPressedStyle]}
    >
      <Typography
        fontColor={fontColor}
        fontSize={fontSize ? fontSize : 13}
        fontWeight={fontWeight ? fontWeight : 'bold'}
      >
        {text}
      </Typography>
    </Pressable>
  );
};
