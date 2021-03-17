import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:44302/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcarsbybranıd?brandıd="
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
