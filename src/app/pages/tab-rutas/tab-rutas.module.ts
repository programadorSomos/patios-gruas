import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRutasPageRoutingModule } from './tab-rutas-routing.module';

import { TabRutasPage } from './tab-rutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRutasPageRoutingModule
  ],
  declarations: [TabRutasPage]
})
export class TabRutasPageModule {}
