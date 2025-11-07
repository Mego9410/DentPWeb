import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { AppText } from './AppText';
import { useThemeTokens } from '@/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends PressableProps {
  label: string;
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  disabled,
  leftIcon,
  rightIcon,
  contentStyle,
  labelStyle,
  ...props
}) => {
  const tokens = useThemeTokens();

  const { containerStyle, textColor, borderColor } = React.useMemo(() => {
    switch (variant) {
      case 'secondary':
        return {
          containerStyle: {
            backgroundColor: tokens.colors.surface,
          },
          textColor: tokens.colors.primary,
          borderColor: tokens.colors.primary,
        };
      case 'outline':
        return {
          containerStyle: {
            backgroundColor: 'transparent',
          },
          textColor: tokens.colors.textSecondary,
          borderColor: tokens.colors.border,
        };
      default:
        return {
          containerStyle: {
            backgroundColor: tokens.colors.primary,
          },
          textColor: tokens.colors.surface,
          borderColor: 'transparent',
        };
    }
  }, [tokens, variant]);

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        containerStyle,
        {
          opacity: disabled ? 0.4 : pressed ? 0.85 : 1,
          borderColor,
        },
        contentStyle,
      ]}
      disabled={disabled}
      {...props}
    >
      <React.Fragment>
        {leftIcon ? <React.Fragment>{leftIcon}</React.Fragment> : null}
        <AppText
          style={[styles.label, { color: textColor }, labelStyle]}
          variant="body"
        >
          {label}
        </AppText>
        {rightIcon ? <React.Fragment>{rightIcon}</React.Fragment> : null}
      </React.Fragment>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

