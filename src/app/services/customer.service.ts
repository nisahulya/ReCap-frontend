import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDtoForRental } from '../models/customerDtoForRental';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl ="https://localhost:44302/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customers/getall"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getCustomerDetailsForRental(): Observable<ListResponseModel<CustomerDtoForRental>> {
    let newPath = this.apiUrl + "customers/getcustomerdetailsforrental"
    return this.httpClient.get<ListResponseModel<CustomerDtoForRental>>(newPath);
  }
}
