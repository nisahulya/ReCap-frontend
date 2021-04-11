import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  creditCardAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService,
    private toastrService:ToastrService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
  }

  createCreditCardAddForm()
  {
    this.creditCardAddForm = this.formBuilder.group({
      customerId:[""],
      ownerName:["", Validators.required],
      creditCardNumber:["", Validators.required],
      expirationDate:["", Validators.required],
      securityCode:['', Validators.required]
    });
  }

  addCreditCard()
  {
    let creditCardModel =  Object.assign({}, this.creditCardAddForm.value);
    creditCardModel.customerID = Number(this.localStorageService.getIdDecodeToken());
    this.userService.addCreditCard(creditCardModel).subscribe((response) => {
      this.toastrService.success(response.message, "Success");
      window.location.reload();
    });

  }
}
