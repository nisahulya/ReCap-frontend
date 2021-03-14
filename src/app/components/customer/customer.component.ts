import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer1 ={ customerId:1, userId:2, companyName:'Turkcell'}
  customer2 ={ customerId:2, userId:3, companyName:'Vodafone'}
  

  customers = [this.customer1, this.customer2]
  constructor() { }

  ngOnInit(): void {
  }

}
