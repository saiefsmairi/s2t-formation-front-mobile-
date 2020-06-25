import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  slideOpts = {
    speed: 400
    };
  constructor(private router:Router) { }

  ngOnInit() {}

  tosignupPage(){
this.router.navigate(['signup']);
  }

  
  tosigninPage(){
    this.router.navigate(['login']);
      }
}
