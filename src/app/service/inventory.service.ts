import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';
import { throwError } from 'rxjs';
import { Store } from '../store';
import { Item } from '../item';
import { Observable, of } from 'rxjs';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  item: Item;
  store: Store;
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private _url1: string = 'http://localhost:8802/inventory/findall';
  private _url: string = 'http://localhost:8810/inventoryManager/getalls';
 

  getProducts(): Observable<Item[]> {
    console.log("test call");
    return this.httpClient.get<Item[]>(this._url);
  }

  
}
