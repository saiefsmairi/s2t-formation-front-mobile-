import { PopoverController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-session-menu',
  templateUrl: './session-menu.page.html',
  styleUrls: ['./session-menu.page.scss'],
})
export class SessionMenuPage implements OnInit {
  @Input() id: string;

  constructor(public popoverController: PopoverController) {
   }

  ngOnInit() {
  }

  async dismiss() {
    await this.popoverController.dismiss();
      }

      closePopoverafterClick(eveent){
        if(eveent.type=='click'){
          this.dismiss();
        }
      }
}
