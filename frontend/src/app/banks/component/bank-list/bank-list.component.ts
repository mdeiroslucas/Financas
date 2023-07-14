import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bank } from 'src/app/model/bank';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { BanksFormComponent } from '../../containers/banks-form/banks-form.component';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent {
  @Input() banks: Bank[]= [];
  @Output() save = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  displayedColumns: string[] = ['name', 'codigoBanco', 'acao'];

  constructor(
    private dialog: MatDialog,
  ){

  }

  onAdd(){
    // this.router.navigate(['new'], {relativeTo: this.activatedRoute});
    // this.router.navigate(['new'], {relativeTo: this.activatedRoute});
    const dialogRef = this.dialog.open(BanksFormComponent, {
        data: 
        {
          titulo: 'Você deseja adicionar um novo banco?'
        }
    });
  }

  onEdit(bank: Bank){
    this.edit.emit(bank);
  }

  onDelete(bank: Bank){
    this.delete.emit(bank);
  }

  onSubmit(){    
    // this.save.emit(true);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
