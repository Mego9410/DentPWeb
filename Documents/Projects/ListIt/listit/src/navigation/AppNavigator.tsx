import React, { useMemo, useCallback } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HomePage } from '@/components/pages/HomePage';
import { AuthLandingPage } from '@/components/pages/AuthLandingPage';
import { CreateJobPage } from '@/components/pages/CreateJobPage';
import { JobHistoryPage } from '@/components/pages/JobHistoryPage';
import { SettingsPage } from '@/components/pages/SettingsPage';
import { useThemeTokens } from '@/theme';
import { config } from '@/utils/config';
import type { MainTabParamList, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const tabIconMap: Record<keyof MainTabParamList, React.ComponentProps<typeof Ionicons>['name']> = {
  Dashboard: 'home-outline',
  CreateJob: 'add-circle-outline',
  History: 'albums-outline',
  Settings: 'person-circle-outline',
};

const TabBarIcon = ({
  name,
  color,
  size,
}: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
  size: number;
}) => <Ionicons name={name} size={size} color={color} />;

const MainTabs = () => {
  const tokens = useThemeTokens();

  const screenOptions = useCallback(
    ({ route }: { route: { name: keyof MainTabParamList } }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: tokens.colors.surface,
        borderTopColor: tokens.colors.border,
        height: 64,
        paddingTop: 8,
      },
      tabBarActiveTintColor: tokens.colors.primary,
      tabBarInactiveTintColor: tokens.colors.caption,
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <TabBarIcon name={tabIconMap[route.name]} color={color} size={size} />
      ),
    }),
    [tokens],
  );

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Dashboard" component={HomePage} options={{ title: 'Home' }} />
      <Tab.Screen name="CreateJob" component={CreateJobPage} options={{ title: 'Sell' }} />
      <Tab.Screen name="History" component={JobHistoryPage} options={{ title: 'Inbox' }} />
      <Tab.Screen name="Settings" component={SettingsPage} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

const SignedInNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
  </Stack.Navigator>
);

export const AppNavigator: React.FC = () => {
  const tokens = useThemeTokens();
  const hasClerkKey = Boolean(config.clerkPublishableKey);
  const navigationTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: tokens.colors.background,
        card: tokens.colors.surface,
        text: tokens.colors.text,
        border: tokens.colors.border,
        primary: tokens.colors.primary,
      },
    }),
    [tokens],
  );

  const signedInContent = <SignedInNavigator />;

  return (
    <NavigationContainer theme={navigationTheme}>
      {hasClerkKey ? (
        <>
          <SignedIn>{signedInContent}</SignedIn>
          <SignedOut>
            <AuthLandingPage />
          </SignedOut>
        </>
      ) : (
        signedInContent
      )}
    </NavigationContainer>
  );
};

