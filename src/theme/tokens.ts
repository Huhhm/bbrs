import {colors} from './colors';
import {
  fontSize,
  screenSize,
  iconSize,
  borderRadius,
  spacing,
} from './dimensions';

type ThemeConfig = {
  background: string;
  foreground: string;
  text: string;
};

const light: ThemeConfig = {
  background: colors.white,
  foreground: colors.white,
  text: colors.black,
};

const dark: ThemeConfig = {
  background: colors.black,
  foreground: colors.black,
  text: colors.white,
};

export const themes = {
  light,
  dark,
};

export const tokens = {
  colors: {
    ...colors,
  },
  font_size: {
    ...fontSize,
  },
  screen_width: {
    ...screenSize,
  },
  spacing: {
    ...spacing,
  },
  icon_size: {
    ...iconSize,
  },
  border_radius: {
    ...borderRadius,
  },
};

export function themeConfig(mode: ThemeConfig) {
  return {
    ...tokens,
    ...mode,
  };
}
