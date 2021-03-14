import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 ={ carId:1, brandId:3, colorId:2, modelYear:2010, description:"hololo"}
  car2 ={ carId:2, brandId:3, colorId:2, modelYear:2014, description:"zdf"}
  car3 ={ carId:3, brandId:3, colorId:2, modelYear:2006, description:"holzczdolo"}
  car4 ={ carId:4, brandId:3, colorId:2, modelYear:2015, description:"g<sf"}

  cars = [this.car1, this.car2, this.car3, this.car4]
  constructor() { }

  ngOnInit(): void {
  }

}
