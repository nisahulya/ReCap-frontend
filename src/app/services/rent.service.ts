import { Injectable } from '@angular/core';
import { CarDetailDto } from '../models/carDetailDto';
import { RentItem } from '../models/rentItem';
import { RentItems } from '../models/rentItems'

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor() { }

  addToRent (carDetailDto : CarDetailDto){
    let item =RentItems.find(c=> c.carDetailDto.carId === carDetailDto.carId); //Gönderilen aracın Id'si varsa ekle
    if(item){ //item varsa 1 artıracak
      item.quantity += 1;
    }
    else{
      let rentItem = new RentItem(); //objesini oluşturduk
      rentItem.carDetailDto = carDetailDto;
      rentItem.quantity =1;
      RentItems.push(rentItem) //sepete ekler
    }
  }
  
  removeFromRent(carDetailDto : CarDetailDto){
    let item =RentItems.find(c=> c.carDetailDto.carId === carDetailDto.carId);
    RentItems.splice(RentItems.indexOf(item),1);
  }

  list() : RentItem[]{ //kiralama sepetini listeliyoruz.
    return RentItems;
  }
}
