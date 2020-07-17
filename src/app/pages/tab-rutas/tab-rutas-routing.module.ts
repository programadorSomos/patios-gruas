import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabRutasPage } from './tab-rutas.page';

const routes: Routes = [
  {
    path: '',
    component: TabRutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabRutasPageRoutingModule {}
