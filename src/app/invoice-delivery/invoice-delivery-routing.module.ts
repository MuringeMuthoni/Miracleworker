import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceDeliveryPage } from './invoice-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceDeliveryPageRoutingModule {}
