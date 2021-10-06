import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryPickupPageRoutingModule } from './delivery-pickup-routing.module';

import { DeliveryPickupPage } from './delivery-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryPickupPageRoutingModule
  ],
  declarations: [DeliveryPickupPage]
})
export class DeliveryPickupPageModule {}
