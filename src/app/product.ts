export class Product {
  productId: string;
  brand: string;
  description: string;
  price: number;

  constructor(productId: string, brand: string, description: string, price: number) {
    this.productId = productId;
    this.brand = brand;
    this.description = description
    this.price = price;
  }
}
