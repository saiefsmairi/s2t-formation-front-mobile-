import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
      path: 'messessions',
      loadChildren: () =>
      import('../pages/messessions/messessions.module').then(
      m => m.MessessionsPageModule
      )
      },
      {
      path: 'modifierprofil',
      loadChildren: () =>
      import('../pages/modifierprofil/modifierprofil.module').then(m => m.ModifierprofilPageModule)
      },
      {
      path: 'listesessions',
      loadChildren: () =>
      import('../pages/listesessions/listesessions.module').then(m => m.ListesessionsPageModule)
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
