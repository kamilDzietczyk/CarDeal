import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { FormBuilder, FormGroup, NgForm} from '@angular/forms';


export class user {
  constructor(
    public id: number,
    public name: string,
    public login: string,
    public password: string,
    public email: string
  ){}
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  User: user[];
  closeResult: string;
  editForm: FormGroup;
  deleteId: FormGroup;
  message: string;
  tempArr: string[] = [];

  constructor(private httpClient:HttpClient, 
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.getUsers();
    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      login: [''],
      password: [''],
      email: ['']
    } );
    this.deleteId = this.formBuilder.group({
      id:['']
    })
  }

  getUsers(){
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        this.User = response;
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
    var count = 0
    for(var u of this.User ){
      if(f.value.name === u.name && f.value.email === u.email ){
        count ++
        this.message = "User exist"
      }else if(f.value.email === u.email){
        count ++
        this.message = "Email exist"
      }
    }
    if(count>0){
      this.modalService.dismissAll();
    }else{
      const url = 'http://localhost:8080//users/add';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); 
      });
      this.message = ""
      this.modalService.dismissAll();
    }
  }

  openDetails(targetModal, User: user) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("nam")?.setAttribute('value', User.name);
    document.getElementById("log")?.setAttribute('value', User.login);
    document.getElementById("pass")?.setAttribute('value', User.password);
    document.getElementById("ema")?.setAttribute('value', User.email);
 }

 openEdit(targetModal, User: user) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'lg'
 });
 this.editForm.patchValue( {
  id: User.id,
  name: User.name,
  login: User.login,
  password: User.password,
  email: User.email
  });
  }
  
  onSave() {
    console.log("Jaszczur fajo");   
  const editURL = 'http://localhost:8080//users/' + this.editForm.value.id + '/edit';
  this.httpClient.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }

  openDelete(targetModal, User: user) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'lg'
 });
 this.deleteId.patchValue( {
  id: User.id,
  name: User.name,
  login: User.login,
  password: User.password,
  email: User.email
  });
  }

  onDelete() {
  const deleteURL = 'http://localhost:8080/users/' + this.deleteId.value.id + '/delete';
  this.httpClient.delete(deleteURL)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
}
