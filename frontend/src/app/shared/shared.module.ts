import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ConfimationDialogComponent } from './components/confimation-dialog/confimation-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfimationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    ErrorDialogComponent
  ]
})
export class SharedModule { }
