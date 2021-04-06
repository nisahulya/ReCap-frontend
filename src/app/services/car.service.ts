import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:44302/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  
  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorid=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getFilteredCars(brandId:number, colorId:number): Observable<ListResponseModel<CarDetailDto>>
  {
    let newPath = this.apiUrl + "cars/getallcardetailsbyfilter?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  add(car:Car):Observable<ResponseModel> {
    let newPath = this.apiUrl + "cars/add";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

}
