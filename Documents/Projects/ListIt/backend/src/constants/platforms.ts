export const PLATFORMS = {
  EBAY: 'ebay',
  FACEBOOK: 'facebook',
  VINTED: 'vinted',
  DEPOP: 'depop',
} as const;

export type Platform = typeof PLATFORMS[keyof typeof PLATFORMS];

export const PLATFORM_NAMES = {
  [PLATFORMS.EBAY]: 'eBay',
  [PLATFORMS.FACEBOOK]: 'Facebook Marketplace',
  [PLATFORMS.VINTED]: 'Vinted',
  [PLATFORMS.DEPOP]: 'Depop',
};

