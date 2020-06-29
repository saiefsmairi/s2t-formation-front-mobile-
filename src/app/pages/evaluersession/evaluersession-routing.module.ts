import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluersessionPage } from './evaluersession.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluersessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluersessionPageRoutingModule {}
