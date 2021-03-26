import { Injectable } from '@angular/core';
import { Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login: Login;

  constructor() { 
    this.login = new Login();
  }

  SetLogin(login: Login){
    this.login = login;    
  }
  
}
