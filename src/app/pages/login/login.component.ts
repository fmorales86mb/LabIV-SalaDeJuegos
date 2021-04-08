import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Credential } from '../../models/credential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  public email:string = "";
  public pass: string = "";
  public showSpinner: boolean;
  public isDisabled: boolean;
  public isRequiered: boolean;
  public hasAlert: boolean;
  public alertMessage: string = "";

  constructor(private authService: AuthService, private router: Router){
    this.showSpinner = false;
    this.isDisabled = false;
    this.isRequiered = false;
    this.hasAlert = false;
  }  
  
  public async ClickIngresar(){
    this.showSpinner = true;
    this.isDisabled = true;
    this.isRequiered = true;
    this.hasAlert = false;

    //console.log(this.email, this.pass);

    try{
      if(this.Validate()){
        let credential = new Credential(this.email, this.pass);

        if (await this.authService.Ingresar(credential)){
          this.router.navigate(['/home']);
        }
        else{
          this.alertMessage = "email o contraseña incorrectos";
          this.hasAlert = true;
        }   
        //console.log("userId: ", this.authService.GetUserId()); 
      }
    }
    catch(error){
      console.log(error);
      this.alertMessage = "Ocurrió un error inesperado";
      this.hasAlert = true;
    }
    finally{
      this.showSpinner = false;
      this.isDisabled = false;
    }     
  }

  private Validate():boolean{
    let isValid: boolean = true;

    if(!this.email && !this.pass){
      this.alertMessage = "Debe ingresar email y contraseña";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.email){
      this.alertMessage = "Debe ingresar su email";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.pass){
      this.alertMessage = "Debe ingresar la contraseña";
      isValid = false;
      this.hasAlert = true;
    }

    return isValid;
  }
}
