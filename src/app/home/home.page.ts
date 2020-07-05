import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private localNotifications: LocalNotifications) { }

  ngOnInit() {
   
  }
 
}
