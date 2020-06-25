import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListesessionsPageRoutingModule } from './listesessions-routing.module';

import { ListesessionsPage } from './listesessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListesessionsPageRoutingModule
  ],
  declarations: [ListesessionsPage]
})
export class ListesessionsPageModule {}
