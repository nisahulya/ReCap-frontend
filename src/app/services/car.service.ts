import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailDtoResponseModel } from '../models/carDetailDtoResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:44302/api/cars/getcardetails"
  
  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<CarDetailDtoResponseModel> {
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl);
  }
}
