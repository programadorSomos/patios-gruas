import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FechasComponent } from 'src/app/components/fechas/fechas.component';
import { TabFechaPageRoutingModule } from './tab-fecha-routing.module';
import { TabFechaPage } from './tab-fecha.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabFechaPageRoutingModule
  ],
  declarations: [TabFechaPage, FechasComponent]
})
export class TabFechaPageModule {}