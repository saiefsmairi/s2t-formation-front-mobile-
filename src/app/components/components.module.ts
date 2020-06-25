import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SlidesComponent],
  exports: [SlidesComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,

  ]
})
export class ComponentsModule { }
