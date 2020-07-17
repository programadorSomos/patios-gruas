import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabReportesPageRoutingModule } from './tab-reportes-routing.module';

import { TabReportesPage } from './tab-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabReportesPageRoutingModule
  ],
  declarations: [TabReportesPage]
})
export class TabReportesPageModule {}
