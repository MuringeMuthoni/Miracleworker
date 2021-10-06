import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryPickupPage } from './delivery-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryPickupPageRoutingModule {}
