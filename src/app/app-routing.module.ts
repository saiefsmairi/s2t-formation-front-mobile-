import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('./index/index.module').then(m => m.IndexPageModule)
    },
    {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./pages/session/session.module').then( m => m.SessionPageModule)
  },
  {
    path: 'session-menu',
    loadChildren: () => import('./pages/session-menu/session-menu.module').then( m => m.SessionMenuPageModule)
  },
  {
    path: 'evaluersession',
    loadChildren: () => import('./pages/evaluersession/evaluersession.module').then( m => m.EvaluersessionPageModule)
  },
  {
    path: 'reclamersession',
    loadChildren: () => import('./pages/reclamersession/reclamersession.module').then( m => m.ReclamersessionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
