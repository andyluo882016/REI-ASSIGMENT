import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  private subject = new Subject<any>();

  constructor() {

  }

  sendMessage(meg: string) {
    this.subject.next({ text: meg });
  }

  cleanMessage() {
    this.subject.next();
  }

  receiveMessge(): Observable<any> {

    return this.subject.asObservable();
  }
}
