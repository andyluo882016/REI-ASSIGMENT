import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Item } from '../item';
import { Location } from '../location';
import { Product } from '../product';
import { PurchaseService } from '../buyservice/purchase.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckOutProducts } from '../check-out-products';
import { MsgServiceService } from '../message/msg-service.service';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.css']
})
export class ProductPurchaseComponent implements OnInit {
   item: Item;
  cart: Cart;
  product :Product;
  locATION: Location;
  mychproduct: CheckOutProducts;
  testchproduct: CheckOutProducts[];
  cproducts: CheckOutProducts[];
  maps: any = "";
  message: string = 'Your Purchase has been Completed ';
  sending = false;
  updateTatol: number = 0;

  availableProducts: any;
 
  availableLocation: any = ["CHARLOTTE", "ONLINE", "TACOMA", "GREENVILLE", "ASHEVILLE", "SEATTLE"];

  constructor(private purchaseService: PurchaseService, private msgServiceService: MsgServiceService, private router: Router) {
   
  }

  ngOnInit() {
    this.item = new Item();
    this.product = new Product("","", "",0);
    this.mychproduct = new CheckOutProducts(this.product, 0, 0);
    this.testchproduct = [ ];
    this.locATION = new Location();
    this.cart = new Cart("", this.item, this.mychproduct, 0, 0, []);
    
    this.availableProducts = [
      {
        productId: "123456",
        brand: "REI",
        description: "Tent",
        price: 10
      },
      {
        productId: "999999",
        brand: "Big Agnes",
        description: "Backpacking Tent",
        price: 129
      },

      {
        productId: "222222",
        brand: "Patagonia",
        description: "Micro",
        price: 12
      },
      {
        productId: "333333",
        brand: "Black Diamond",
        description: "Hiking Poles",
        price: 18
      },
      {
        productId: "098762",
        brand: "The North Face",
        description: "Rain Jacket",
        price: 68
      },
      {
        productId: "384123",
        brand: "REI",
        description: "Rain Pant",
        price: 35
      }

    ]
   
  }

  public getTotalNumber() {

    for (let n = 0; n < length; ++n) {
      this.updateTatol = this.updateTatol + this.testchproduct[n].amount;
    }
  }

  public addintocart(lname: string, total: number, productId: string, product: Product): any {

    this.purchaseService.addcart(lname, total, productId, product).subscribe(

      (response) => {
        this.cart = response;
        //this.testchproduct = this.cart.plist
        console.log(response+"   ***----->>>> " + this.cart);
        console.log("get cart done");
      }

      );     
  }
  //this work
  public checkoutcart(lname: string, total: number, product: Product) {

    this.purchaseService.addProduct(lname, total, product).subscribe(

      (response) => {
        this.cart = response;
        console.log("***----->>>> " + response);
        this.testchproduct = response.plist;
        console.log("get product into a cart done");
        this.updateTatol = this.updateTatol + response.total;
      }
       
    );
    
  }

  sendMyMessage(): void {
    this.msgServiceService.sendMessage("Thank You for you shopping!!!  " + this.message);
  }

  clearMessage(): void {
    // clear message
    this.msgServiceService.cleanMessage();
    this.item = new Item();
    this.product = new Product("", "", "", 0);
    this.mychproduct = new CheckOutProducts(this.product, 0, 0);
    this.testchproduct = [];
    this.cart = new Cart("", this.item, this.mychproduct, 0, 0, []);
    this.updateTatol = 0;
  }

  setupMessage(msg: string) {
    this.message = msg;
    console.log("--->>> " + this.message);
  }

  cleanPurchase() {
    this.updateTatol = 0;
    this.item = new Item();
    this.product = new Product("", "", "", 0);
    this.mychproduct = new CheckOutProducts(this.product, 0, 0);
    this.testchproduct = [];
    this.cart = new Cart("", this.item, this.mychproduct, 0, 0, []);
    this.purchaseService.resetPurchase().subscribe(
      (response) => {
        this.maps = response;
        console.log("Clear up the server map");
      }
    );
    
  }
}
