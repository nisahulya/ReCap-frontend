import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(key:string)
  {
    return localStorage.getItem(key);
  }

  setLocalStorage(key:string, value:string)
  {
    return localStorage.setItem(key,value);
  }

  removeLocalStorage(key:string)
  {
    return localStorage.removeItem(key);
  }

  getIdDecodeToken()
  {
    let token = this.getLocalStorage("token");
    let id:number = Number(Object.values(jwtDecode(token))[0]);
    return id;
  }
}
