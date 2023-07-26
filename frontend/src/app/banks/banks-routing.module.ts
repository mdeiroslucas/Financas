import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './containers/banks/banks.component';
import { BanksFormComponent } from './containers/banks-form/banks-form.component';

const routes: Routes = [
  {path: '', component: BanksComponent},
  {path: 'new', component: BanksFormComponent},
  {path: 'edit/:id', component: BanksFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanksRoutingModule { }
