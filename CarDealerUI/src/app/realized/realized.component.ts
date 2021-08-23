import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




export class carSeller {
  constructor(
    public id_sller_car: number,
    public brand: string,
    public model: string,
    public price: number,
    public vin_number: number,
    public sale_date: Date,
    public year_of_prod: number,
    public owner_id:number = 0
  ){}
}

@Component({
  selector: 'app-realized',
  templateUrl: './realized.component.html',
  styleUrls: ['./realized.component.css']
})
export class RealizedComponent implements OnInit {

  CarSeller: carSeller[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getSellerCar();
  }

  getSellerCar(){
    this.httpClient.get<any>('http://localhost:8080/carSeller').subscribe(
      response => {
        this.CarSeller = response;
      }
    );
  }
}
