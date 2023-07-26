import { Component, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Bank } from '../../model/bank';
import { BanksService } from '../../services/banks.service';
import { BanksFormComponent } from '../banks-form/banks-form.component';
import { ConfimationDialogComponent } from 'src/app/shared/components/confimation-dialog/confimation-dialog.component';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss'],
})
export class BanksComponent {
  banks$: Observable<Bank[]> | null = null;
  
  bankName: string = '';
  bankCode: string = '';
  titulo: string = '';
  bankId: string = '';

  @Output() texto: string = 'Você deseja adicionar um novo banco?'
  

  displayedColumns: string[] = ['name', 'codigoBanco', 'acao'];

  constructor(
    private bankService: BanksService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private confirmDialog: MatDialog
  ) {
    this.refresh();
  }

  refresh(){
     this.banks$ = this.bankService.findAll().pipe(
      catchError((error) => {
        this.onError('Não foi possível carregar os bancos!');
        return of([]);
      })
    );
  }

  onAdd() {
    // this.router.navigate(['new'], {relativeTo: this.activatedRoute});
    // const dialogRef = this.dialog.open(BanksFormComponent, {
    //   data: 
    //   {
    //     titulo: 'Você deseja adicionar um novo banco?',
    //   },
    // });
  }

  onEdit(bank: Bank) {
    this.bankService.getById(bank._id).subscribe({
      next: (result) => {
        const dialogRef = this.dialog.open(BanksFormComponent, {
          data: {
            titulo: 'Você deseja editar o banco?',
            bankName: result.name,
            bankCode: result.bankCode,
            bankId: result._id
          }
        });

        // dialogRef.afterClosed().subscribe()

      },
      error: err => this.onError('Não foi possível carregar o banco!'),
    });
  }

  onDelete(bank: Bank){
    const confirmDialog = this.confirmDialog.open(ConfimationDialogComponent, {
      data: "Deseja excluir o banco?"
    });

    confirmDialog.afterClosed().subscribe(result => {

      if (result){

        this.bankService.delete(bank._id).subscribe({
          next: (result) => {
            this.refresh();
            console.log('curso excluido')
          },
          error: (err) => console.log('Curso excluído')
        })
      }

    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
