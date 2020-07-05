import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-messessions',
  templateUrl: './messessions.page.html',
  styleUrls: ['./messessions.page.scss'],
})
export class MessessionsPage implements OnInit {
  listSessions: any;
  userId: any = JSON.parse(sessionStorage.getItem('auth-user')).user_id;

  constructor(private userService: UserService, private camera: Camera, private localNotifications: LocalNotifications) { }

  ngOnInit() {

   let res = this.userService.getlisteNotifByuser(JSON.parse(sessionStorage.getItem('auth-user')).user_id);
   res.subscribe(
      data1 => {

       this.localNotifications.schedule({
        id: data1.notif_id,
        text: data1.notification,

      });


      },
      err => {
        console.log('breaks here get notif by user');
      }
    );



this.userService.getUserSessions(this.userId).subscribe(data => {
    this.listSessions = data;
    });
  }

}
