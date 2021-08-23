import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  User: user[];
  message: string ="";

  constructor(private httpClient:HttpClient,
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

  LoginUser(f:NgForm){
    var count =0;
    for(var u of this.User){
      if(f.value.login+""+f.value.password === u.login+""+u.password){
        var id = u.id;
        this.message ="";
        if(u.is_admin==1){
          this.route.navigate(['/home'])
        }else{
          this.route.navigate(['/userHome'],{state:{data:{id}}})
        }
      }else{
        this.message = "User not found. Please Regitster";
        count = 0;
        console.log(f.value.login+""+f.value.password);
        console.log(u.login+""+u.password);
      }
    }
    console.log(count);
    
  }
}
