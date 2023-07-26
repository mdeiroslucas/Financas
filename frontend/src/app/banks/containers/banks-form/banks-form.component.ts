import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BanksService } from '../../services/banks.service';
import { Bank } from '../../model/bank';
import { tap } from 'rxjs';

@Component({
  selector: 'app-banks-form',
  templateUrl: './banks-form.component.html',
  styleUrls: ['./banks-form.component.scss'],
})
export class BanksFormComponent {

  bankName: string = this.data.bankName;
  bankCode: number = this.data.bankCode;
  titulo: string = this.data.titulo;
  bankId: string = this.data.bankId;

  form: FormGroup = this.formBuilder.group({
    nomeBancoControl: [this.data.bankName || '', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern(/^[A-Za-z\s]*$/)]],
    codigoBancoControl: [this.data.bankCode || '', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)]],
    idControl: ['']
  });

  constructor(
    public dialogRef: MatDialogRef<BanksFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: NonNullableFormBuilder,
    private banksService: BanksService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.setForm();
  }

  onConfirm(result: boolean): void {
    this.dialogRef.close(result);
  }

  setForm(){
    if (this.data.bankId) {
      this.form.setValue({
        nomeBancoControl: this.data.bankName,
        codigoBancoControl: this.data.bankCode,
        idControl: this.data.bankId
      })
    }
  }

  onSubmit(){
    const record: Partial<Bank> = {
      _id: this.form.value.idControl, 
      name: this.form.value.nomeBancoControl,
      bankCode: this.form.value.codigoBancoControl,
    };

    console.log(record._id)
    
    if (record._id) {
    this.banksService.update(record).subscribe({
      next: (result) => {this.banksService.findAll(), this.onSuccess('Banco atualizado com sucesso!')},
      error: (err) => console.log(err)
    });
    } else {
      this.banksService.create(record).subscribe({
        next: (result) => this.onSuccess('Banco salvo com sucesso!'),
        error: (err) => console.log(err)
      });
    }
    
  }

  onCancel(){
    close;
  }

  onSuccess(texto: string){
    this.snackBar.open(texto, '', {duration: 2000});
  }

  onError(){
    this.snackBar.open('Não foi possível salvar o curso', 'OK', {duration: 2000});
  }

  getErrorMessage(fieldName: string){

    const field = this.form.get(fieldName);

    if (fieldName == 'nomeBancoControl'){
    
      if (field?.hasError('required')){
        return 'Campo obrigatório!';
      }
      
      if (field?.hasError('minlength')){
        const requiredLength = field.errors ? field.errors['minlength']['requiredLength']:5;

        return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`;
      }

      if (field?.hasError('pattern')){
        return 'O campo não deve conter números!'
      }
      
      return 'Campo inválido';
    } else{
      
      if (field?.hasError('required')){
        return 'Campo obrigatório!';
      }
      
      if (field?.hasError('minlength')){
        const requiredLength = field.errors ? field.errors['minlength']['requiredLength']:3;

        return `Tamanho mínimo precisa ser de ${requiredLength} caracteres`;
      }

      if (field?.hasError('pattern')){
        return 'O campo deve conter apenas números!';
      }
    
      return 'Campo inválido';
    }
  }
}
