import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BankListComponent } from './component/bank-list/bank-list.component';
import { BanksComponent } from './containers/banks/banks.component';
import { BanksFormComponent } from './containers/banks-form/banks-form.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    BankListComponent,
    BanksComponent,
    BanksFormComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class BanksModule { }
