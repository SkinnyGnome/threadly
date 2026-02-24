export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  sizes: Size[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: Size;
}
