import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionMenuPageRoutingModule } from './session-menu-routing.module';

import { SessionMenuPage } from './session-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionMenuPageRoutingModule
  ],
  declarations: [SessionMenuPage]
})
export class SessionMenuPageModule {}
