import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  
  constructor() { }
  itemValue = new BehaviorSubject(this.theItem);

  set theItem(value :any) {
    this.itemValue.next(value); 
    localStorage.setItem('theItem', value);
  }
 
  get theItem() {
    return localStorage.getItem('theItem');
  }
}
