import { Component } from '@angular/core';
import { MsgServiceService } from './message/msg-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rei-app';

  message$: any;
  subscription: Subscription;

  constructor(private messageService: MsgServiceService) {
    // subscribe to home component messages
    this.message$ = this.messageService.receiveMessge();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
