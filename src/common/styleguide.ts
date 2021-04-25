import { Dimensions, Platform } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('screen').width;
export const DEVICE_HEIGHT = Dimensions.get('screen').height;

export const IS_ANDROID = Platform.OS === 'android' ? true : false;
export const IS_IOS = Platform.OS === 'ios' ? true : false;

export const FONT_DEFAULT_SIZE = 14;

export const COLORS = {
  FONT_BLACK: '#1C1C1C',
  WHITE: '#FFF',
} as const;

export const FONT_WEIGHT = {
  regular: '400',
  '700': '700',
  bold: 'bold',
} as const;
