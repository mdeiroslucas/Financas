import { Injectable } from '@angular/core';
import { Bank } from '../model/bank';
import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(private httpClient: HttpClient) {}

  // private readonly API = "/src/assets/banks.json";
  private readonly API = "api/banks";

  findAll() {
    return this.httpClient.get<Bank[]>(this.API)
    .pipe(
      tap(banks => console.log(banks))
    );
  }

  save(record: Partial<Bank>){
    if (record._id) {
      this.update(record) 
    } else { 
      this.create(record);
    }
  }

  public create(record: Partial<Bank>){
    return this.httpClient.post<Bank>(this.API, record)
    .pipe(tap(banks => console.log(banks)));
  }

  public update(record: Partial<Bank>) {
    console.log(record._id + ' on update');
    return this.httpClient.put<Bank>(`${this.API}/${record._id}`, record).pipe(tap(banks => console.log(banks)),
    first()
    );
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`)
    .pipe(
      tap(banks => console.log(banks)),
      first()
    );
  }
  
  getById(id: string){
    return this.httpClient.get<Bank>(`${this.API}/${id}`);
  }
}
