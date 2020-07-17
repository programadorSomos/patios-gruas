import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabRegistroPageRoutingModule } from './tab-registro-routing.module';

import { TabRegistroPage } from './tab-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRegistroPageRoutingModule
  ],
  declarations: [TabRegistroPage]
})
export class TabRegistroPageModule {}
