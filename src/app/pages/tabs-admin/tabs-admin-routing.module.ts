import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsAdminPage } from './tabs-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TabsAdminPage,
    children:[
      {
        path: 'tab-mapa',
        loadChildren: () => import('../tab-mapa/tab-mapa.module').then( m => m.TabMapaPageModule)
      },
      {
        path: 'tab-registro',
        loadChildren: () => import('../tab-registro/tab-registro.module').then( m => m.TabRegistroPageModule)
      },
      {
        path: 'tab-reportes',
        loadChildren: () => import('../tab-reportes/tab-reportes.module').then( m => m.TabReportesPageModule)
      },
      {
        path: 'tab-rutas',
        loadChildren: () => import('../tab-rutas/tab-rutas.module').then( m => m.TabRutasPageModule)
      },
      {
        path: 'tab-fecha',
        loadChildren: () => import('../tab-fecha/tab-fecha.module').then( m => m.TabFechaPageModule)
      },

    ]
  },
  { 
    path: '',
    redirectTo: '/tabs-admin/tab-rutas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsAdminPageRoutingModule {}
