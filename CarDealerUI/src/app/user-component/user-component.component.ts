import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




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

  Car:car[];

  constructor(private httpClient:HttpClient,
              private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getCar();
  }
  

  openBuy(targetModal) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
    });
  }

  getCar(){
    this.httpClient.get<any>('http://localhost:8080/car').subscribe(
      response => {
        this.Car = response;
      }
    );
  }
  
}
