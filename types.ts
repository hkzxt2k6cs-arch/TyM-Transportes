
export interface MovingItem {
  name: string;
  quantity: number;
  estimatedVolume: number; // in cubic meters
}

export interface QuoteEstimate {
  items: MovingItem[];
  totalVolume: number;
  recommendedTruck: string;
  estimatedPriceRange: {
    min: number;
    max: number;
  };
  advice: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export enum AppRoute {
  Home = '/',
  Quote = '/quote',
  Services = '/services',
  Tracking = '/tracking',
  About = '/about'
}
