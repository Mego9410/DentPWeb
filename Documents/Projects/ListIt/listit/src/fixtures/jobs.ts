export type JobStatus = 'queued' | 'processing' | 'completed';

export interface JobFixture {
  id: string;
  title: string;
  marketplace: 'eBay' | 'Facebook Marketplace' | 'Vinted' | 'Etsy';
  status: JobStatus;
  createdAt: string;
  thumbnailColor: string;
  outputs?: {
    generatedTitle: string;
    description: string;
    tags: string[];
  };
}

export interface ListingRecommendation {
  id: string;
  title: string;
  seller: string;
  sellerRating: number;
  ratingCount: number;
  condition: string;
  label: string;
  price: number;
  priceWithProtection: number;
  imageUrl: string;
}

export const jobFixtures: JobFixture[] = [
  {
    id: 'job-001',
    title: 'Vintage Levi’s denim jacket',
    marketplace: 'eBay',
    status: 'completed',
    createdAt: '2025-11-06T13:45:00.000Z',
    thumbnailColor: '#3A6EF5',
    outputs: {
      generatedTitle: 'Vintage Levi’s Trucker Denim Jacket – Size M',
      description:
        'Classic Levi’s trucker jacket in good vintage condition. Light wear throughout and soft, broken-in denim. Measurements: chest 21", length 24".',
      tags: ['Levis', 'Vintage', 'Denim', 'Jacket', '90s'],
    },
  },
  {
    id: 'job-002',
    title: 'Nike Air Max 270 React',
    marketplace: 'Vinted',
    status: 'processing',
    createdAt: '2025-11-07T09:10:00.000Z',
    thumbnailColor: '#38C3A0',
  },
  {
    id: 'job-003',
    title: 'Mid-century oak side table',
    marketplace: 'Facebook Marketplace',
    status: 'queued',
    createdAt: '2025-11-07T09:30:00.000Z',
    thumbnailColor: '#FFB74D',
  },
  {
    id: 'job-004',
    title: 'Handmade ceramic planter set',
    marketplace: 'Etsy',
    status: 'completed',
    createdAt: '2025-11-05T18:20:00.000Z',
    thumbnailColor: '#B781F3',
    outputs: {
      generatedTitle: 'Handmade Ceramic Planter Duo – Sage & Sand',
      description:
        'Two handcrafted ceramic planters with matte glaze. Includes drainage holes and matching saucers. Perfect for succulents or herbs.',
      tags: ['Handmade', 'Planter', 'Ceramic', 'Pair'],
    },
  },
];

export const recommendedListings: ListingRecommendation[] = [
  {
    id: 'listing-001',
    title: 'Red Cowboy Boots',
    seller: 'alexsmitha',
    sellerRating: 4.9,
    ratingCount: 8,
    condition: 'Satisfactory',
    label: 'NO LABEL',
    price: 20,
    priceWithProtection: 21.7,
    imageUrl:
      'https://images.unsplash.com/photo-1600180758890-d4ad4a3bb470?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'listing-002',
    title: 'Floral Print Swimsuit',
    seller: 'stylehaus',
    sellerRating: 4.7,
    ratingCount: 16,
    condition: 'New without tags',
    label: 'NO LABEL',
    price: 28,
    priceWithProtection: 30.1,
    imageUrl:
      'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'listing-003',
    title: 'Vintage Leather Jacket',
    seller: 'retrofinds',
    sellerRating: 5,
    ratingCount: 23,
    condition: 'Very good',
    label: 'Vintage',
    price: 65,
    priceWithProtection: 69.4,
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'listing-004',
    title: 'Canvas High-Top Sneakers',
    seller: 'kickzlab',
    sellerRating: 4.5,
    ratingCount: 11,
    condition: 'Good',
    label: 'Converse',
    price: 35,
    priceWithProtection: 37.4,
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
  },
];

