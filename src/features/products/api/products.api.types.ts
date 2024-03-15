export interface ProductPrice {
  amount?: string;
  currency?: string;
}

export interface ProductDetails {
  id: string;
  SKU?: string;
  name?: string;
  brandName?: string;
  mainImage?: string;
  price?: ProductPrice;
  sizes?: [];
  stockStatus?: string;
  colour?: string;
  description?: string;
}

export interface ProductsResponse {
  result?: string;
  data?: ProductDetails[];
}
