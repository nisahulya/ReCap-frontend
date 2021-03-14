import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color1 ={ colorId:1, colorName:'Kırmızı'}
  color2 ={ colorId:2, colorName:'Mavi'}
  

  colors = [this.color1, this.color2]
  constructor() { }

  ngOnInit(): void {
  }

}
