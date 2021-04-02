import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { RentItem } from 'src/app/models/rentItem';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  dataLoaded = false;
  rentItems : RentItem[] =[]
  

  constructor(private rentService : RentService,
     private toastrService :ToastrService ) {}


  ngOnInit(): void {
    this.getRent();
    
  }

  getRent(){
    this.rentItems = this.rentService.list()
    this.dataLoaded = true;
  } 

  
  removeFromRent(carDetailDto : CarDetailDto){
    this.rentService.removeFromRent(carDetailDto);
    this.toastrService.error("Sepetten Silindi!")
  }

}
