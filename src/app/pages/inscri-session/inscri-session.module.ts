import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriSessionPageRoutingModule } from './inscri-session-routing.module';

import { InscriSessionPage } from './inscri-session.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriSessionPageRoutingModule
  ],
  declarations: [InscriSessionPage]
})
export class InscriSessionPageModule {}
