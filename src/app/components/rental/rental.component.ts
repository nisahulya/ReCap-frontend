import { Component, OnInit,Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarForRentalDto } from 'src/app/models/carForRentalDto';
import { CustomerDtoForRental } from 'src/app/models/customerDtoForRental';
import { Rental } from 'src/app/models/rental';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetailDtos:RentalDetailDto[] = [];
  customerId:number;
  rentdate:Date;
  returndate:Date;
  customerDtosForRental:CustomerDtoForRental[]=[];
  rental: Rental;
  isRented:boolean = false;
  customers:CustomerDtoForRental[]=[];
  
  @Input() carforrental:CarForRentalDto;
  constructor(private rentalService:RentalService,private toastrService: ToastrService, private customerService:CustomerService ) {}

  ngOnInit(): void {
    this.getRentalDtos();
    this.getAllCustomers();
  }

  getRentalDtos(){
    this.rentalService.getRentalDtos().subscribe(response=>{
      this.rentalDetailDtos = response.data
    })
  }

  getAllCustomers()
   {
     this.customerService.getCustomerDetailsForRental().subscribe(response => {
       this.customers = response.data;
     });
   }

  createRent()
   {
    let rent:Rental = {
      carId: this.carforrental.carId,
      customerId: this.customerId,
      rentDate: this.rentdate,
      returnDate: this.returndate,
      //price: this.carforrental.dailyPrice
   };
    this.rental = rent;
    this.isRented = true;
    this.toastrService.success("Your rental request has been received. You are redirected to the payment page.");
   }
}
