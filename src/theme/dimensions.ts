import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenSize = {
  width,
  height,
};

export const fontSize = {
  small: 12,
  medium: 18,
  large: 24,
};

export const spacing = {
  0: 0,
  0.5: 4,
  1: 8,
  1.5: 12,
  2: 16,
  2.5: 20,
  3: 24,
  3.5: 28,
  4: 32,
};

export const iconSize = {
  small: 14,
  medium: 24,
  large: 34,
};

export const borderRadius = {
  small: 8,
  medium: 14,
  large: 20,
};
