import { MapType } from '@angular/compiler';
import { Item } from './item';
import { Product } from './product';
import { CheckOutProducts } from './check-out-products';
export class Cart {
  id: string;
  item: Item;
  product: CheckOutProducts;
  total: number;
  charge: number
  plist: CheckOutProducts[];

  constructor(id: string, item: Item, product: CheckOutProducts, total: number, charge: number, plist: CheckOutProducts[]) {
    this.id = id;
    this.item = item;
    this.product = product;
    this.total = total;
    this.charge = charge;
    this.plist = plist
  }
}
