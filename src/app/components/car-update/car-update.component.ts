import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm : FormGroup;
  dataLoaded = false;

  selectedCar : CarDetailDto
  selectedColor : Color
  selectedBrand : Brand

  carId : number;
  colorId : number;
  brandId : number;

  cars:CarDetailDto[] = [];
  colors :Color[] = [];
  brands :Brand[] = [];

  constructor(private formBuilder:FormBuilder, private carService: CarService,    
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private colorService : ColorService,
    private brandService : BrandService) { }

  ngOnInit(): void {
  }

  createCarUpdateForm()
  {
    this.carUpdateForm = this.formBuilder.group({
      carId : [this.selectedCar?.carId, Validators.required],
      carName : ["",Validators.required],    
      brandId : [this.selectedBrand?.brandId, Validators.required],
      brandModel : ["", Validators.required],
      colorId : [this.selectedColor?.colorId, Validators.required],      
      modelYear : ["", Validators.required],
      dailyPrice : ["", Validators.required],
      description : ["", Validators.required]     
    });
  }

  getSelectedCar(carId : number) {
    if(this.carId == carId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }

  getSelectedColor(colorId : number) {
    if(this.colorId == colorId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }

  update() {
    if (this.carUpdateForm.valid) {
      let carUpdatetModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(carUpdatetModel).subscribe((response) => {
        this.toastrService.success(response.message, "Başarılı");
      },responseError=>{
        if(responseError.error.ValidationErrors.length>0){
          for (let i = 0; i <responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Doğrulama Hatası")
          }       
        } 
      })      
    }
    else{
      this.toastrService.error("Formunuz  Eksik", "Dikkat")   
    }
  }

  getAllCars()
  {
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = response.success
    });
  }
  getAllBrands()
  {
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
      this.dataLoaded = response.success
    });
  }

  getAllColors() {
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
      this.dataLoaded = response.success;
    })
  }

  getSelectedBrand(brandId : number) {
    if(this.brandId == brandId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }

}
