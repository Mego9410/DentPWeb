import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AppText } from './AppText';
import { useThemeTokens } from '@/theme';

interface ChipProps extends ViewProps {
  label: string;
  selected?: boolean;
}

export const Chip: React.FC<ChipProps> = ({ label, selected = false, style, ...props }) => {
  const tokens = useThemeTokens();

  const containerStyles = React.useMemo(
    () => ({
      backgroundColor: selected ? tokens.colors.primary : tokens.colors.accentMuted,
      borderColor: selected ? tokens.colors.primary : 'transparent',
    }),
    [selected, tokens],
  );

  const labelColor = React.useMemo(
    () => (selected ? tokens.colors.surface : tokens.colors.accent),
    [selected, tokens],
  );

  return (
    <View {...props} style={[styles.base, containerStyles, style]}>
      <AppText variant="caption" style={[styles.label, { color: labelColor }]}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  label: {
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});

