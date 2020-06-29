import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuardGuardGuard } from 'src/app/guards/auth-guard-guard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    
    component: TabsPage,
    canActivate: [AuthGuardGuardGuard],

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
      },
      {
      path: 'session/:id',
      loadChildren: () =>
      import('../session/session.module').then(m => m.SessionPageModule)
      },
      
      {
      path: 'session/:id/reclamation',
      loadChildren: () =>
      import('../reclamersession/reclamersession.module').then(m => m.ReclamersessionPageModule)
    }
    ,
    {
      path: 'session/:id/evaluation',
      loadChildren: () =>
      import('../evaluersession/evaluersession.module').then(m => m.EvaluersessionPageModule)
    }
      
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
