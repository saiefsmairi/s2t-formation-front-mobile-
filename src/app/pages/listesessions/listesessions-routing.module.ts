import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListesessionsPage } from './listesessions.page';

const routes: Routes = [
  {
    path: '',
    component: ListesessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListesessionsPageRoutingModule {}
