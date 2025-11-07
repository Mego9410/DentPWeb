import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AppText } from './AppText';
import { useThemeTokens } from '@/theme';

interface BadgeProps extends ViewProps {
  label: string;
  tone?: 'success' | 'warning' | 'danger' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ label, tone = 'neutral', style, ...props }) => {
  const tokens = useThemeTokens();

  const { color, background } = React.useMemo(() => {
    switch (tone) {
      case 'success':
        return { color: tokens.colors.success, background: '#E5F7F1' };
      case 'danger':
        return { color: tokens.colors.danger, background: '#FCEAEA' };
      case 'warning':
        return { color: '#EAA816', background: '#FFF5D9' };
      default:
        return { color: tokens.colors.caption, background: tokens.colors.accentMuted };
    }
  }, [tone, tokens]);

  return (
    <View {...props} style={[styles.base, { borderColor: background, backgroundColor: background }, style]}>
      <AppText variant="caption" style={[styles.label, { color }]}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  label: {
    fontWeight: '600',
  },
});

