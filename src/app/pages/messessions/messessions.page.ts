import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messessions',
  templateUrl: './messessions.page.html',
  styleUrls: ['./messessions.page.scss'],
})
export class MessessionsPage implements OnInit {
  listSessions:any;
  userId:any = JSON.parse(sessionStorage.getItem('auth-user')).user_id;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.getUserSessions(this.userId).subscribe(data=>{
    this.listSessions=data;
    });
  }

  
}
