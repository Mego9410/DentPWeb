import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native';
import { useThemeTokens } from '@/theme';

export interface InputProps extends TextInputProps {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  containerProps?: ViewProps;
}

export const Input: React.FC<InputProps> = ({
  leading,
  trailing,
  style,
  containerProps,
  ...props
}) => {
  const tokens = useThemeTokens();
  const flattenedContainerStyle = React.useMemo(
    () => (containerProps?.style ? StyleSheet.flatten(containerProps.style) : {}),
    [containerProps?.style],
  );

  return (
    <View
      {...containerProps}
      style={[
        styles.container,
        {
          backgroundColor: tokens.colors.divider,
          borderColor: tokens.colors.border,
          borderWidth: flattenedContainerStyle?.borderWidth ?? 0,
        },
        containerProps?.style,
      ]}
    >
      {leading}
      <TextInput
        placeholderTextColor={tokens.colors.caption}
        style={[styles.input, { color: tokens.colors.text }, style]}
        {...props}
      />
      {trailing}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 0,
    paddingHorizontal: 12,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
});

