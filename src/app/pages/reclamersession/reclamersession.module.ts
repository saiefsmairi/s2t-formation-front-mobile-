import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReclamersessionPageRoutingModule } from './reclamersession-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ReclamersessionPage } from './reclamersession.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReclamersessionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReclamersessionPage]
})
export class ReclamersessionPageModule {}
