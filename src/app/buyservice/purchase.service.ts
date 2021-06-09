import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';
import { throwError } from 'rxjs';
import { Store } from '../store';
import { Cart } from '../cart';
import { Item } from '../item';
import { CheckOutProducts } from '../check-out-products';
import { Location } from '../location';
import { Product } from '../product';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
 // item: Item;
  cart: Cart;
  product: Product
  chProducts: CheckOutProducts;
  //locATION: Location;
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'REI-COM-PERSIST': 'true',
      'REI-COM-LOCATION': 'USA'
    })
  };
  
  private _url8 : string = "http://localhost:8812/cart/addcart/";
  private _url2: string = 'http://localhost:8812/cart/selectItem/';
  private _url6: string = "http://localhost:8812/cart/clearmap";
    
  addcart(lname: string, total: number, productId: string, product: Product): Observable<Cart>{
    
    let urls = this._url2+ lname + '/' + total + '/' + productId;
    console.log("add product to cart");
    return this.httpClient.put<Cart>(urls, product, this.httpOptions)
      .pipe(
        catchError(err => {
          return of(null);
        })

      );

  }

  addProduct(lname: string, total: number, product: Product): Observable<Cart> {

    let url = this._url8 + lname + '/' + total;
    console.log("add product to cart");
    return this.httpClient.post<Cart>(url, product, this.httpOptions)
      .pipe(
        catchError(err => {
          return of(null);
        })

      );

  }

  resetPurchase(): Observable<any> {

    console.log("Clean up end server map");
    return this.httpClient.get<any>(this._url6, this.httpOptions);
      
  }
 
}
