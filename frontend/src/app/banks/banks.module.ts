import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksListComponent } from './component/banks-list/banks-list.component';
import { BanksFormComponent } from './containers/banks-form/banks-form.component';
import { BanksComponent } from './containers/banks/banks.component';


@NgModule({
  declarations: [
    BanksComponent,
    BanksFormComponent,
    BanksListComponent
  ],
  imports: [
    CommonModule,
    BanksRoutingModule,
    AppMaterialModule,
    SharedModule,
  ]
})
export class BanksModule { }
