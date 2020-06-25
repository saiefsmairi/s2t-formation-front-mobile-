import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    
    component: TabsPage,
    
     children: [
      {
      path: 'messessions',
      loadChildren: () =>
      import('../messessions/messessions.module').then(
      m => m.MessessionsPageModule
      )
      },
      {
      path: 'modifierprofil',
      loadChildren: () =>
      import('../modifierprofil/modifierprofil.module').then(m => m.ModifierprofilPageModule)
      },
      {
      path: 'listesessions',
      loadChildren: () =>
      import('../listesessions/listesessions.module').then(m => m.ListesessionsPageModule)
      },
      {
        path:'',
        redirectTo:'/tabs/messessions',
        pathMatch:'full'
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
