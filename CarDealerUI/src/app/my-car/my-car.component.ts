import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


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
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css']
})
export class MyCarComponent implements OnInit {

  CarSeller: carseller[] = [];
  TempId: tempId[];

  constructor(private httpClient:HttpClient,) { }

  ngOnInit(): void {
    this.getId();
    this.getCar();
  }

  async getId(){
    this.httpClient.get<any>('http://localhost:8080/tempId').subscribe(
      response => {
        this.TempId = response;
      }
    );
  }

  async getCar(){
    this.httpClient.get<any>('http://localhost:8080/carSeller').subscribe(
      response => {
        for(var r of response){
          console.log(r.owner_id);
          console.log(this.TempId[0].temp_Id);
          if(r.owner_id === this.TempId[0].temp_Id ){
            this.CarSeller.push(r);
          }
        }
      }
    );
  }

}
