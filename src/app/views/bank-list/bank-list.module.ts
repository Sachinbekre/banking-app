import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankListRoutingModule } from './bank-list-routing.module';
import { BankListComponent } from './bank-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankDetailsComponent } from './bank-details/bank-details.component';


@NgModule({
  declarations: [
    BankListComponent,
    BankDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BankListRoutingModule
  ]
})
export class BankListModule { }
