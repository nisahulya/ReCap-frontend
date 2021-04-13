import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';


const routes: Routes = [

  { path:"", pathMatch:"full", component:CarComponent},
  { path:"cars", component:CarComponent },
  { path: "cars/brand/:brandId", component:CarComponent},
  { path: "cars/color/:colorId", component:CarComponent},
  { path:"cars/filter/:brandId/:colorId", component:CarComponent},

  {path : "cartlist",component: CartListComponent },

  {path : "cars/rentals",component: RentalComponent },
  {path : "cars/rentals/:carId",component: RentalComponent },

  {path:"brands/add", component:BrandAddComponent},
  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"colors/add", component:ColorAddComponent},

  {path:"login", component:LoginComponent},
  {path:"register", component: RegisterComponent},

  {path:"creditcard", component: CreditcardComponent},

  {path : "brands/update", component : BrandUpdateComponent}, //canActivate : [LoginGuard]},
  {path : "colors/update", component : ColorUpdateComponent}, //canActivate : [LoginGuard]},
  {path : "cars/update", component : CarUpdateComponent} //canActivate : [LoginGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
