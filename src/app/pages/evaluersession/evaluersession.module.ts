import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluersessionPageRoutingModule } from './evaluersession-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { EvaluersessionPage } from './evaluersession.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluersessionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EvaluersessionPage]
})
export class EvaluersessionPageModule {}
