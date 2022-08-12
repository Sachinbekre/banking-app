import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankListRoutingModule } from './bank-list-routing.module';
import { BankListComponent } from './bank-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';


@NgModule({
  declarations: [
    BankListComponent,
    BankDetailsComponent,
    ErrorHandlerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BankListRoutingModule
  ]
})
export class BankListModule { }
