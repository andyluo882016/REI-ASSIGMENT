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
export class StoreServiceService {
  store: Store;
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private _url: string = 'http://localhost:8810/inventoryManager/findallstores';
  private _url2: string = 'http://localhost:8810/inventoryManager/neraby/';

  getAllStores(): Observable<Store[]> {
    console.log("test call");
    return this.httpClient.get<Store[]>(this._url);
  }

  findProductByLocation(lname: string): Observable<Store[]> {
    let urls = this._url2 + lname;
    console.log("location near by call");
    return this.httpClient.get<Store[]>(urls, this.httpOptions);
  }
}
