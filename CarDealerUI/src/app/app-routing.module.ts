import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CarComponent } from './car/car.component';
import { RealizedComponent } from './realized/realized.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'car', component: CarComponent},
  {path: 'realized', component: RealizedComponent},
  {path: '', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
