import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMapaPageRoutingModule } from './tab-mapa-routing.module';

import { TabMapaPage } from './tab-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMapaPageRoutingModule
  ],
  declarations: [TabMapaPage]
})
export class TabMapaPageModule {}
