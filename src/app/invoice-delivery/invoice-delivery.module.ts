import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceDeliveryPageRoutingModule } from './invoice-delivery-routing.module';

import { InvoiceDeliveryPage } from './invoice-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceDeliveryPageRoutingModule
  ],
  declarations: [InvoiceDeliveryPage]
})
export class InvoiceDeliveryPageModule {}
