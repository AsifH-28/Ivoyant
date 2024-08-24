export interface Product {
    id: number; 
    name: string; 
    description: string; 
    price: number;
    inStock: boolean; 
    category: string; 
    sku: string; 
    imageUrl?: string; 
    rating?: number; 
    tags?: string[]; 
    createdAt: Date; 
    updatedAt?: Date; 
  }

  export interface AddToCartInterface{
    
  } 