import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { IonicModule } from '@ionic/angular';

import { ListesessionsPageRoutingModule } from './listesessions-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ListesessionsPage } from './listesessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListesessionsPageRoutingModule,
    NgxDatatableModule,
    Ng2SearchPipeModule  ],
  declarations: [ListesessionsPage]
})
export class ListesessionsPageModule {}
