export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'animals' | 'characters' | 'bears';
  size: 'small' | 'medium' | 'large';
  rating: number;
  isNew?: boolean;
  isOffer?: boolean;
  description: string;
  gallery: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string;
  size: string;
  search: string;
}