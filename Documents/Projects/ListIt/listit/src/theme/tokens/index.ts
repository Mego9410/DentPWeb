export type ColorToken =
  | 'background'
  | 'surface'
  | 'surfaceElevated'
  | 'primary'
  | 'primaryHover'
  | 'accent'
  | 'accentMuted'
  | 'border'
  | 'divider'
  | 'text'
  | 'textSecondary'
  | 'caption'
  | 'success'
  | 'danger';

export type SpaceToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type FontSizeToken = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'display';

export type FontWeightToken = 'regular' | 'medium' | 'semibold' | 'bold';

export interface ThemeTokens {
  colors: Record<ColorToken, string>;
  spacing: Record<SpaceToken, number>;
  radii: Record<RadiusToken, number>;
  fontSizes: Record<FontSizeToken, number>;
  fontWeights: Record<FontWeightToken, string>;
  shadows: {
    level1: {
      elevation: number;
    };
  };
}

export const defaultTokens: ThemeTokens = {
  colors: {
    background: '#F6F7F7',
    surface: '#FFFFFF',
    surfaceElevated: '#FFFFFF',
    primary: '#01726F',
    primaryHover: '#01625E',
    accent: '#00958A',
    accentMuted: '#DCF2EE',
    border: '#E0E5E7',
    divider: '#E7ECED',
    text: '#111418',
    textSecondary: '#5D6770',
    caption: '#86919A',
    success: '#1EAD8E',
    danger: '#E04C4C',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 28,
  },
  radii: {
    none: 0,
    sm: 6,
    md: 12,
    lg: 16,
    xl: 20,
    full: 999,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    display: 28,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  shadows: {
    level1: {
      elevation: 4,
    },
  },
};

