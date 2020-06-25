import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessessionsPageRoutingModule } from './messessions-routing.module';

import { MessessionsPage } from './messessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessessionsPageRoutingModule
  ],
  declarations: [MessessionsPage]
})
export class MessessionsPageModule {}
