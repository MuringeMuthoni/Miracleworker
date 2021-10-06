import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesegmentsPage } from './invoicesegments.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicesegmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesegmentsPageRoutingModule {}
