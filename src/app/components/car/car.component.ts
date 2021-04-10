import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';
import { RentService } from 'src/app/services/rent.service';
import { RentalService } from 'src/app/services/rental.service';
import { CarForRentalDto } from 'src/app/models/carForRentalDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {

  cars:CarDetailDto[] = [];
  dataLoaded=false;
  carDetailDtos: CarDetailDto[] = [];
  carDetailDto : CarDetailDto;
  colors: Color[] = [];
  brands: Brand[] = [];
  filterText: string = '';
  brandId: number;
  colorId: number;
  isRented: boolean;
  carForRentalDtos : CarForRentalDto;
  isCustomer:boolean;


  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService : ToastrService,
    private rentService : RentService,
    private localStorageSevice: LocalStorageService,
    private rentalService:RentalService,
    private userService:UserService

    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] , params['colorId']) {
        this.getFilteredCars(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCars();
        this.getColors();
        this.getBrands();
      }
    });

  }


  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getFilteredCars(brandId: number, colorId: number) {
    this.carService.getFilteredCars(brandId, colorId).subscribe((response) => {
      this.carDetailDtos = response.data;
      if(this.carDetailDtos.length == 0)
      {
        console.log("No cars matching your search were found.")
      }
    });
  }

  getSelectedColorId(colorId: number) {
    if(this.colorId == colorId)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedBrandId(brandId: number) {
    if(this.brandId == brandId)
    {
      console.log(this.brandId);
      return true;
    }
    else
    {
      return false;
    }
  }

  addToRent(carDetailDto : CarDetailDto){
    
    
    if(carDetailDto.carId===0){
      this.toastrService.error("Bu araç bulunmuyor");
    }
    else {
      this.toastrService.success("Kiralama Sepetine Eklendi");
      this.rentService.addToRent(carDetailDto);
    }    
  }  

  getRentalPage(isRented: boolean) {
    this.isRented = isRented;
    if (this.isRented == false) {
      this.checkFindeks();
      return true;
    } else {
      this.toastrService.error(
        'Bu araç zaten kiralanmış. Lütfen başka bir araç seçiniz.'
      );
      return false;
    }   
  }
  

  checkFindeks()
  {
    let carId:number = this.carForRentalDtos.carId;
    let customerId:number = this.localStorageSevice.getIdDecodeToken();
    this.rentalService.checkFindeks(carId, customerId).subscribe(response =>{
    },responseError => {
      this.toastrService.error(responseError.error.message, "error");
    });
  }

  checkIfCustomer()
  {
    var userId = this.localStorageSevice.getIdDecodeToken();
    this.userService.checkIfCustomer(userId).subscribe(response => {
      this.isCustomer = response.success;
      console.log(response.success)
    });
  }

}
