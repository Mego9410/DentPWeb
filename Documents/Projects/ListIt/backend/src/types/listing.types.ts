import { Platform } from '../constants';

export interface CreateListingRequest {
  platform: Platform;
  imageBase64: string;
}

export interface ProcessImageResponse {
  identification: {
    category: string;
    condition: string;
    brand?: string;
    features: string[];
    suggestedKeywords: string[];
  };
  content: {
    title: string;
    description: string;
    tags: string[];
  };
  processedImageBase64: string;
}

