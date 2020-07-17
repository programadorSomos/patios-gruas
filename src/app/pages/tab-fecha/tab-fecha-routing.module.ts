import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabFechaPage } from './tab-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: TabFechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFechaPageRoutingModule {}
