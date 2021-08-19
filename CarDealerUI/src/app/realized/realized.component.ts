import { Component, OnInit } from '@angular/core';



export class car {
  constructor(
    public id: number,
    public brand: string,
    public model: string,
    public car_price: number,
    public year_of_prod: number,
    public date_sale: Date
  ){}
}

@Component({
  selector: 'app-realized',
  templateUrl: './realized.component.html',
  styleUrls: ['./realized.component.css']
})
export class RealizedComponent implements OnInit {

  Car: car[];

  constructor() { }

  ngOnInit(): void {
  }

}
