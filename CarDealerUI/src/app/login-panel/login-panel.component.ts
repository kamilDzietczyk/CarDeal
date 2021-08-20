import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


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

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpClient.get<any>('http://localhost:8080/users').subscribe(
      response => {
        this.User = response;
        console.log(response);
      }
    );
    
    
  }
}
