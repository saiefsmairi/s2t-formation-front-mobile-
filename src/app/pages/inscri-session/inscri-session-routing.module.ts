import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriSessionPage } from './inscri-session.page';

const routes: Routes = [
  {
    path: '',
    component: InscriSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriSessionPageRoutingModule {}
