import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AppText, Badge } from '@/components/atoms';
import { useThemeTokens } from '@/theme';

interface CreditIndicatorProps extends ViewProps {
  balance: number;
  tier?: 'free' | 'starter' | 'pro';
}

export const CreditIndicator: React.FC<CreditIndicatorProps> = ({
  balance,
  tier = 'starter',
  style,
  ...props
}) => {
  const tokens = useThemeTokens();

  const tierLabel = React.useMemo(() => {
    if (tier === 'free') return 'Free';
    if (tier === 'pro') return 'Pro';
    return 'Starter';
  }, [tier]);

  return (
    <View
      {...props}
      style={[
        styles.container,
        {
          backgroundColor: tokens.colors.surface,
          borderColor: tokens.colors.border,
        },
        styles.shadow,
        style,
      ]}
    >
      <View style={styles.row}>
        <AppText variant="caption">Credits</AppText>
        <Badge label={tierLabel} tone={tier === 'pro' ? 'success' : 'neutral'} />
      </View>
      <HeadingLike value={balance} />
      <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
        Available balance
      </AppText>
    </View>
  );
};

const HeadingLike = ({ value }: { value: number }) => {
  const tokens = useThemeTokens();
  return (
    <AppText style={[styles.balance, { color: tokens.colors.text }]}>
      {value.toLocaleString()}
    </AppText>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    gap: 8,
  },
  shadow: {
    shadowColor: '#00000010',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balance: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '700',
  },
});

