import React from 'react';
import { Text, TextProps, TextStyle, StyleProp } from 'react-native';
import { useThemeTokens } from '@/theme';

export type TextVariant = 'body' | 'caption' | 'label';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
}

const stylesMap: Record<TextVariant, { fontSize: number; lineHeight: number; fontWeight?: string }> = {
  body: { fontSize: 16, lineHeight: 22 },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '500' },
  label: { fontSize: 14, lineHeight: 20, fontWeight: '500' },
};

export const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  variant = 'body',
  ...props
}) => {
  const tokens = useThemeTokens();

  const baseStyle = stylesMap[variant];

  const color =
    variant === 'caption'
      ? tokens.colors.caption
      : variant === 'label'
        ? tokens.colors.textSecondary
        : tokens.colors.text;

  const composedStyle: StyleProp<TextStyle> = [
    {
      color,
      fontSize: baseStyle.fontSize,
      lineHeight: baseStyle.lineHeight,
      fontWeight: baseStyle.fontWeight,
    },
    style,
  ];

  return (
    <Text style={composedStyle} {...props}>
      {children}
    </Text>
  );
};

