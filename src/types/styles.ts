import { COLORS, FONT_WEIGHT } from '../common/styleguide';
import { valueOf } from './common';

type ColorMap = typeof COLORS;
export type Color = valueOf<ColorMap>;

type FontMap = typeof FONT_WEIGHT;
export type FontWeight = valueOf<FontMap>;
