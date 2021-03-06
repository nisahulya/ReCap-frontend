import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44302/api/';

  constructor(private httpClient:HttpClient) { }

  checkIfCustomer(userId:number):Observable<ResponseModel> {
    let newPath = this.apiUrl + "users/checkifcustomer?userId=" + userId;
    return this.httpClient.get<ResponseModel>(newPath);
  }

  addCreditCard(creditcard:CreditCard):Observable<ResponseModel> {
    let newPath = this.apiUrl + "creditcards/add";
    return this.httpClient.post<ResponseModel>(newPath, creditcard);
  }
}
