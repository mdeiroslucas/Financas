import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    AppMaterialModule
  ]
})
export class SharedModule { }
