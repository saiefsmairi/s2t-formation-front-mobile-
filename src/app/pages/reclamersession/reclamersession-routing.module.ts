import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamersessionPage } from './reclamersession.page';

const routes: Routes = [
  {
    path: '',
    component: ReclamersessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReclamersessionPageRoutingModule {}
