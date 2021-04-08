import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Register } from '../models/register';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44302/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  register(register: Register) {
    let newPath = this.apiUrl + '/auth/register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      newPath,
      register
    );
  }
}
