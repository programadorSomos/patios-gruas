import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FechasComponent } from 'src/app/components/fechas/fechas.component';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { TabFechaPage } from './tab-fecha.page';

const routes: Routes = [
  {
    path: '',
    component: TabFechaPage
  },
  {path: '/fechas',
  component:FechasComponent}
];

@NgModule({
  imports: [ BrowserModule, CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabFechaPageRoutingModule {}