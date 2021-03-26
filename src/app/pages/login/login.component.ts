import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public Login (nombre: string, clave: string){
    let logueo: Login = new Login();
    logueo.Clave = clave;
    logueo.NombreUsuario = nombre;

    this.authService.SetLogin(logueo);
  }

  ngOnInit(): void {    
  }

}
