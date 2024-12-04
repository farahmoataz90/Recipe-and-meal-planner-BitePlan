import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [

  {
    path : 'login',
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "details",
    component: DetailsComponent
  },
  {
    path: '' , redirectTo : 'home' , pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];
