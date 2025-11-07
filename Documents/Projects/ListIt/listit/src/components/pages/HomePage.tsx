import React, { useMemo, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useThemeTokens } from '@/theme';
import { CreditIndicator } from '@/components/molecules';
import { AppText, Badge, Button, Chip, Heading, Input } from '@/components/atoms';
import { useCredits } from '@/hooks/useCredits';
import { useJobs } from '@/hooks/useJobs';
import type { MainTabParamList } from '@/navigation/types';
import { recommendedListings } from '@/fixtures/jobs';

const categories = ['All', 'Designer', 'Electronics', 'Home', 'Kids'];

export const HomePage: React.FC = () => {
  const tokens = useThemeTokens();
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();
  const credits = useCredits();
  const { activeJob, completedJobs } = useJobs();
  const [activeCategory, setActiveCategory] = useState('All');

  const listings = useMemo(() => {
    switch (activeCategory) {
      case 'Designer':
        return recommendedListings.slice(0, 2);
      case 'Electronics':
        return recommendedListings.slice(2);
      case 'Home':
        return recommendedListings.slice(1, 3);
      case 'Kids':
        return recommendedListings.slice(0, 1);
      default:
        return recommendedListings;
    }
  }, [activeCategory]);
  const totalCompleted = completedJobs.length;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tokens.colors.background }]}>      
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Input
          placeholder="Search for items or members"
          leading={<Ionicons name="search" size={18} color={tokens.colors.caption} />}
          containerProps={{ style: styles.searchField }}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {categories.map(category => (
            <Pressable
              key={category}
              onPress={() => setActiveCategory(category)}
              style={styles.categoryPressable}
            >
              <Chip label={category} selected={category === activeCategory} />
            </Pressable>
          ))}
        </ScrollView>

        <View style={[styles.banner, { backgroundColor: tokens.colors.primary }]}>        
          <View style={styles.bannerCopy}>
            <Heading level={2} style={styles.bannerTitle}>
              See only good fits
            </Heading>
            <AppText variant="body" style={styles.bannerSubtitle}>
              Select your sizes and follow brands to see items that match your style.
            </AppText>
          </View>
          <Button
            label="Personalize"
            variant="secondary"
            onPress={() => null}
            contentStyle={styles.bannerButton}
          />
        </View>

        <View style={styles.sectionHeader}>        
          <Heading level={2}>Recommended for you</Heading>
          <AppText variant="caption">Curated picks based on your saved searches</AppText>
        </View>

        <View style={styles.grid}>        
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </View>

        <View style={styles.sectionHeader}>        
          <Heading level={2}>Stay on top of your listings</Heading>
          <AppText variant="caption">{totalCompleted} completed listings this week</AppText>
        </View>
        <CreditIndicator balance={credits.balance} tier={credits.tier} />

        {activeJob ? (
          <View style={[styles.activeJobCard, { borderColor: tokens.colors.border, backgroundColor: tokens.colors.surface }]}> 
            <AppText variant="caption">In progress</AppText>
            <Heading level={3}>{activeJob.title}</Heading>
            <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
              {activeJob.marketplace} • {activeJob.status.toUpperCase()}
            </AppText>
            <Button
              label="View job queue"
              variant="outline"
              onPress={() => navigation.navigate('History')}
            />
          </View>
        ) : null}

        <Button
          label="Create new listing"
          onPress={() => navigation.navigate('CreateJob')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

interface ListingCardProps {
  listing: (typeof recommendedListings)[number];
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const tokens = useThemeTokens();

  return (
    <View
      style={[
        styles.listingCard,
        {
          borderColor: tokens.colors.border,
          backgroundColor: tokens.colors.surface,
        },
      ]}
    >
      <View style={styles.listingImageWrapper}>
        <Image source={{ uri: listing.imageUrl }} style={styles.listingImage} />
        <Pressable style={[styles.heartButton, { backgroundColor: tokens.colors.surface }]}
          onPress={() => null}
        >
          <Ionicons name="heart-outline" size={18} color={tokens.colors.textSecondary} />
        </Pressable>
      </View>
      <View style={styles.listingContent}>
        <View style={styles.sellerRow}>
          <AppText variant="label" style={{ color: tokens.colors.text }}>{listing.seller}</AppText>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color={tokens.colors.success} />
            <AppText variant="caption" style={{ color: tokens.colors.textSecondary }}>
              {listing.sellerRating.toFixed(1)} ({listing.ratingCount})
            </AppText>
          </View>
        </View>
        <Badge label="Frequent uploads" tone="success" style={styles.badge} />
        <Heading level={3}>{listing.title}</Heading>
        <AppText variant="body" style={{ color: tokens.colors.textSecondary }}>
          {listing.condition} · {listing.label}
        </AppText>
        <View style={styles.priceRow}>
          <AppText style={[styles.price, { color: tokens.colors.text }]}>
            ${listing.price.toFixed(2)}
          </AppText>
          <AppText variant="caption" style={{ color: tokens.colors.accent }}>
            ${listing.priceWithProtection.toFixed(2)} incl. buyer protection
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 48,
    gap: 24,
  },
  categoryRow: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  banner: {
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },
  bannerCopy: {
    gap: 8,
  },
  bannerTitle: {
    color: '#FFFFFF',
  },
  bannerSubtitle: {
    color: '#E8F7F6',
  },
  bannerButton: {
    backgroundColor: '#FFFFFF',
  },
  sectionHeader: {
    gap: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  listingCard: {
    flexBasis: '48%',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  listingImageWrapper: {
    position: 'relative',
  },
  listingImage: {
    width: '100%',
    height: 160,
  },
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  listingContent: {
    padding: 12,
    gap: 8,
  },
  sellerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  badge: {
    alignSelf: 'flex-start',
  },
  priceRow: {
    gap: 4,
  },
  price: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
  },
  activeJobCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  searchField: {
    backgroundColor: '#EEF2F3',
    borderWidth: 0,
  },
  categoryPressable: {
    marginRight: 8,
  },
});

