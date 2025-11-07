import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { AppText, Input, InputProps } from '@/components/atoms';
import { useThemeTokens } from '@/theme';

interface FormFieldProps extends ViewProps {
  label: string;
  helperText?: string;
  errorText?: string;
  inputProps?: InputProps;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  helperText,
  errorText,
  inputProps,
  style,
  ...props
}) => {
  const tokens = useThemeTokens();
  const hasError = Boolean(errorText);

  return (
    <View {...props} style={[styles.container, style]}>
      <AppText variant="label" style={[styles.label, { color: tokens.colors.caption }]}>
        {label}
      </AppText>
      <Input
        {...inputProps}
        containerProps={{
          ...inputProps?.containerProps,
          style: [
            {
              backgroundColor: tokens.colors.surface,
              borderColor: hasError ? tokens.colors.danger : tokens.colors.border,
              borderWidth: 1,
            },
            inputProps?.containerProps?.style,
          ],
        }}
      />
      {helperText ? (
        <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
          {helperText}
        </AppText>
      ) : null}
      {errorText ? (
        <AppText variant="caption" style={{ color: tokens.colors.danger }}>
          {errorText}
        </AppText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});

