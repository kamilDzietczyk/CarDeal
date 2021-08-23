import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CarComponent } from './car/car.component';
import { RealizedComponent } from './realized/realized.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RegisterComponent } from './register/register.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { MyCarComponent } from './my-car/my-car.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CarComponent,
    RealizedComponent,
    LoginPanelComponent,
    RegisterComponent,
    UserComponentComponent,
    MyCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
