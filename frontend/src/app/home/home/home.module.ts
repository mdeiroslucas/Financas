import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  // declarations: [
  //   HomeComponent
  // ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    
  ],
  // exports: [
  //   HomeComponent
  // ]
})
export class HomeModule { }
