import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'tab-menu',
        loadChildren: () => import('../tab-menu/tab-menu.module').then(m => m.TabMenuPageModule)
      },
    ]
  },
  { 
    path: '',
    redirectTo: '/tabs/tab-menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
