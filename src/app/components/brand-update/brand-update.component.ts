import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm : FormGroup;

  dataLoaded = false;

  brands:Brand[] = [];
  brandId : number;
  selectedBrand : Brand
  
  constructor( private formBuilder:FormBuilder, private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAllBrands();
    this.createBrandUpdateForm();
  }

  getAllBrands()
  {
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
      this.dataLoaded = response.success
    });
  }

  createBrandUpdateForm()
  {
    this.brandUpdateForm = this.formBuilder.group({
      brandId : [this.selectedBrand?.brandId, Validators.required],
      brandName : ["",Validators.required],
    });
  }

  getSelectedBrandId(brandId : number) {
    if(this.brandId == brandId)
    {  
      return true;
    }
    else
    {
      return false;
    }
  }

  update() {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe((response) => {
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


}
