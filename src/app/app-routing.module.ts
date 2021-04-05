import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './pages/shared/error/error.component';
import {LoginComponent} from './pages/login/login.component';
import {QuienSoyComponent} from './pages/quien-soy/quien-soy.component';
import { RegisterComponent } from './pages/register/register.component';

// path: url que aparece, component: componente que va a utilizar
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'quien-soy', component: QuienSoyComponent},
  {path:'register', component: RegisterComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
