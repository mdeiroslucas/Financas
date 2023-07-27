import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home.component';





@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
    
  ]
})
export class HomeModule { }
