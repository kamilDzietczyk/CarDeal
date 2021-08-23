import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export class car {
  constructor(
    public id: number,
    public brand: string,
    public model: string,
    public car_price: number,
    public year_of_prod: number,
    public vin_number: number
  ){}
}

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  Car:car[]

  constructor(private httpClient:HttpClient,
              private route:Router) { }

  ngOnInit(): void {
    this.getCar();
    console.log(history.state.data);
  }

  getCar(){
    this.httpClient.get<any>('http://localhost:8080/car').subscribe(
      response => {
        this.Car = response;
      }
    );
  }
}
