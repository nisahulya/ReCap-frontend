import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { RentItem } from 'src/app/models/rentItem';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  rentItems : RentItem[] = [];

  constructor(private rentService : RentService,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getRent();
  }
  getRent(){
    this.rentItems = this.rentService.list();
  }
  removeFromRent(carDetailDto : CarDetailDto){
    this.rentService.removeFromRent(carDetailDto);
    this.toastrService.error("Sepetten Silindi!")
  }  

}
