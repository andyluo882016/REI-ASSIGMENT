import { Item } from './item';
import { Product } from './product';
export class CheckOutProducts {

  product: Product;
  amount: number;
  topay: number;

  constructor(product: Product, amount: number, topay: number) {
    this.product = product;
    this.amount = amount;
    this.topay = topay
    
  }

}
