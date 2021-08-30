import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

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

export class carseller {
  constructor(
    public id_sller_car: number,
    public brand: string,
    public model: string,
    public price: number,
    public year_of_prod: number,
    public vin_number: number,
    public sale_date:string,
    public owner_id:number
  ){}
}

export class tempId {
  constructor(
    public idtemporary_Id: number,
    public temp_Id: number
  ){}
}

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  Car:car[];
  TempId:tempId[];
  deleteId: FormGroup;
  postForm: FormGroup;

  constructor(private httpClient:HttpClient,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getCar();
    this.getId();
    this.postForm = this.formBuilder.group({
      id_sller_car: [''],
      brand: [''],
      model: [''],
      price: [''],
      year_of_prod: [''],
      vin_number: [''],
      sale_date: [''],
      owner_id:['']
    }) 
    this.deleteId = this.formBuilder.group({
      id_sller_car: [''],
    })
  }
  

  openBuy(targetModal, Car:car) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
    });
    this.postForm.patchValue( {
      brand: Car.brand,
      model: Car.model,
      price: Car.car_price,
      year_of_prod: Car.year_of_prod,
      vin_number: Car.vin_number,
      sale_date: this.datePipe.transform(new Date, "yyyy-MM-dd"),
      owner_id: this.TempId[0].temp_Id
      });    
    this.deleteId.patchValue({
      id_sller_car: Car.id
    })
  }

  onBuy(){
    const postUrl = 'http://localhost:8080/carSeller/add';
    this.httpClient.post(postUrl, this.postForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
    this.onDeleteBuy();
  }

  onDeleteBuy() {
    const deleteURL = 'http://localhost:8080/car/' + this.deleteId.value.id_sller_car + '/delete';
    this.httpClient.delete(deleteURL)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
    }

  getId(){
    this.httpClient.get<any>('http://localhost:8080/tempId').subscribe(
      response => {
        this.TempId = response;
      }
    );
  }

  getCar(){
    this.httpClient.get<any>('http://localhost:8080/car').subscribe(
      response => {
        this.Car = response;
      }
    );
  }
  
}
