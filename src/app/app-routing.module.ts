import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';


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
  {path:"cars/add", component:CarAddComponent},
  {path:"colors/add", component:ColorAddComponent},

  {path:"login", component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
