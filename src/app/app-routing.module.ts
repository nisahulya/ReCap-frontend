import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
