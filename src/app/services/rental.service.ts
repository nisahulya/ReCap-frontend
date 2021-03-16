import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDtoResponseModel } from '../models/rentalDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ="https://localhost:44302/api/rentals/getrentaldetails"
  
  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<RentalDetailDtoResponseModel> {
    return this.httpClient.get<RentalDetailDtoResponseModel>(this.apiUrl);
  }
}
