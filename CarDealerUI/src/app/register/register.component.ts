import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


export class user {
  constructor(
    public id: number,
    public name: string,
    public login: string,
    public password: string,
    public email: string,
    public is_admin: number = 0
  ){}
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  User: user[];
  message: string;

  constructor(private modalService: NgbModal,
              private httpClient:HttpClient,
              private route:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        this.User = response;
      }
    );
  }

  onSubmit(f: NgForm) {
    var count = 0
    for(var u of this.User ){
      if((f.value.name === u.name && f.value.email === u.email)||(f.value.email === u.email)){
        count ++
        this.message = "User exist"
        f.reset(); 
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
      f.reset() 
      this.message = ""      
      this.route.navigate([''])
    }
  }


}
