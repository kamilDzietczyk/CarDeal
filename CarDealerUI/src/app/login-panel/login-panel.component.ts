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
    public email: string
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

  ShowUser(f:NgForm){
    var count =0;
    for(var u of this.User){
      if(f.value.login+""+f.value.password === u.login+""+u.password){
        this.message ="";
        this.route.navigate(['/home'])
        
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
