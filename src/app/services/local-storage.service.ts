import { Injectable } from '@angular/core';

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
}
