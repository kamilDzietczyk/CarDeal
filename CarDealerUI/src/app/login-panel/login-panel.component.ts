import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 


export class user {
  constructor(
    public id: number,
    public name: string,
    public login: string,
    public password: string,
    public email: string,
    public is_admin: number
  ){}
}

export class TempId{
  constructor(
    public idtemporary_Id:number,
    public temp_Id:number
  ){}
}

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  User: user[];
  message: string ="";
  editForm: FormGroup;

  constructor(private httpClient:HttpClient,
              private route:Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();
    this.editForm = this.formBuilder.group({
        idtemporary_Id:[''],
        temp_Id:['']
    })
  }

  getUsers(){
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        this.User = response;
      }
    );
  }

  UpdateId(id:number){
    this.editForm.patchValue({
      idtemporary_Id:1,
      temp_Id:id
    });
    const editURL = 'http://localhost:8080/tempId/1/edit';
    this.httpClient.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
    });
  }

  

  LoginUser(f:NgForm){
    this.getUsers();
    var count =0;
    for(var u of this.User){
      if(f.value.login+""+f.value.password === u.login+""+u.password){
        var id = u.id;
        this.message ="";
        if(u.is_admin==1){
          this.route.navigate(['/home'])
        }else{
          this.route.navigate(['/userHome'])
          this.UpdateId(u.id)
        }
      }else{
        this.message = "User not found. Please Regitster";
        count = 0;
      }
    }
  }
}
