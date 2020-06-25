import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessessionsPage } from './messessions.page';

const routes: Routes = [
  {
    path: '',
    component: MessessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessessionsPageRoutingModule {}
