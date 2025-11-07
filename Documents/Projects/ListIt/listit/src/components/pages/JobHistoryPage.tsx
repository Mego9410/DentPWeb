import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeTokens } from '@/theme';
import { AppText, Badge, Button, Heading } from '@/components/atoms';
import { useJobs } from '@/hooks/useJobs';

export const JobHistoryPage: React.FC = () => {
  const tokens = useThemeTokens();
  const { jobs } = useJobs();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Heading style={[styles.heading, { color: tokens.colors.text }]}>Job history</Heading>
        <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
          Review recently processed listings and copy metadata when you are ready to publish.
        </AppText>

        {jobs.map(job => (
          <View
            key={job.id}
            style={[
              styles.card,
              {
                borderColor: tokens.colors.border,
                backgroundColor: tokens.colors.surface,
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.avatar, { backgroundColor: job.thumbnailColor }]}>
                <Ionicons name="pricetag" size={18} color="#FFFFFF" />
              </View>
              <View style={styles.headerCopy}>
                <Heading level={3}>{job.title}</Heading>
                <AppText variant="caption">{job.marketplace}</AppText>
              </View>
              <Badge
                label={job.status === 'completed' ? 'Completed' : job.status === 'processing' ? 'Processing' : 'Queued'}
                tone={job.status === 'completed' ? 'success' : 'neutral'}
              />
            </View>

            {job.outputs ? (
              <View style={styles.body}>
                <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
                  {job.outputs.generatedTitle}
                </AppText>
                <AppText variant="caption" style={{ color: tokens.colors.caption }}>
                  {job.outputs.description}
                </AppText>
              </View>
            ) : (
              <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
                This job is still processing. You will receive an alert when the metadata is ready.
              </AppText>
            )}

            <View style={styles.actionRow}>
              <Button label="Copy metadata" variant="secondary" onPress={() => null} />
              <Button label="View listing" variant="outline" onPress={() => null} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 48,
    gap: 20,
  },
  heading: {
    fontSize: 28,
  },
  card: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCopy: {
    flex: 1,
    gap: 4,
  },
  body: {
    gap: 8,
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});

