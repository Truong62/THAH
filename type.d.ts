interface ProductColorSize {
  colorId: number | string;
  colorName: string;
  sizeId: number | string;
  sizeValue: string | number;
  quantity: number;
}

interface Product {
  productId: number | string;
  productName: string;
  brandId: number | string;
  brandName: string;
  price: number;
  colorId: number | string;
  colorName: string;
  images: string[];
  sizeId: number | string;
  sizeValue: string | number;
  quantity: number;
  productDescription: string;
  productColorSize: ProductColorSize[];
}
