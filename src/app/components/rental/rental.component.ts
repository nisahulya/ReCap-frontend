import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rental1 ={ customerId:3, rentalId:1, rentDate:'02.02.2020'}
  rental2 ={ customerId:4, rentalId:2, rentDate:'03.03.2020'}
  

  rentals = [this.rental1, this.rental2]
  constructor() { }

  ngOnInit(): void {
  }

}
