import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMapaPage } from './tab-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: TabMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMapaPageRoutingModule {}
