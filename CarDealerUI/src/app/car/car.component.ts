import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';

export class car {
  constructor(
    public id: number,
    public brand: string,
    public model: string,
    public car_price: number,
    public year_of_prod: number
  ){}
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  Car: car[];
  closeResult: string;
  editForm: FormGroup;
  deleteId: FormGroup

  constructor(private httpClient:HttpClient, 
              private modalService: NgbModal,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCar();
    this.editForm = this.formBuilder.group({
    id: [],
    brand: [],
    model: [],
    car_price: [],
    year_of_prod: []
    } );
  }

  getCar(){
    this.httpClient.get<any>('http://localhost:8080/car').subscribe(
      response => {
        console.log(response);
        this.Car = response;
      }
    );
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    const url = 'http://localhost:8080/car/add';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); 
      });
    this.modalService.dismissAll(); 
  }

  openDetails(targetModal, Car: car) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("bra")?.setAttribute('value', Car.brand);
    document.getElementById("mod")?.setAttribute('value', Car.model);
    document.getElementById("pri")?.setAttribute('value', Car.car_price.toString());
    document.getElementById("yea")?.setAttribute('value', Car.year_of_prod.toString());
 }

 openEdit(targetModal, Car: car) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'lg'
 });
 this.editForm.patchValue( {
  id: Car.id,
  brand: Car.brand,
  model: Car.model,
  car_price: Car.car_price,
  year_of_prod: Car.year_of_prod
  });
  }
  
  onSave() {
  const editURL = 'http://localhost:8080/car/' + this.editForm.value.id + '/edit';
  console.log(this.editForm.value);
  this.httpClient.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }





















}



