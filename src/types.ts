export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  durationText: string;
  features: string[];
  whatsAppUrl: string;
  popular?: boolean;
}

export interface GymService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EquipmentCategory {
  id: string;
  title: string;
  items: string[];
  description: string;
  imageAlt: string;
}

export interface LegacyVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
}

