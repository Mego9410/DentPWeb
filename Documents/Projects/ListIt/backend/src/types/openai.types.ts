import { Platform } from '../constants';

export interface ProductIdentification {
  category: string;
  condition: string;
  brand?: string;
  features: string[];
  suggestedKeywords: string[];
}

export interface GeneratedContent {
  title: string;
  description: string;
  tags: string[];
}

export interface ListingData {
  platform: Platform;
  identification: ProductIdentification;
  content: GeneratedContent;
  originalImageUrl?: string;
  processedImageUrl?: string;
}

