import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesegmentsPageRoutingModule } from './invoicesegments-routing.module';

import { InvoicesegmentsPage } from './invoicesegments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesegmentsPageRoutingModule
  ],
  declarations: [InvoicesegmentsPage]
})
export class InvoicesegmentsPageModule {}
