import { Injectable } from '@angular/core';
import { Credential } from '../models/credential';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegisterCredential } from '../models/registerCredential';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private userId: any;
  private isAuth:boolean;

  constructor(private authDb: AngularFireAuth) {
      this.isAuth= false;
      this.userId = null;
  }

  public async Ingresar(credential: Credential): Promise<boolean>{  
    this.isAuth = await this.Authenticate(credential); 
    console.log(this.isAuth);        
    return this.isAuth;
  }

  public async Registrarse(credential: RegisterCredential):Promise<boolean>{
    let isReg:boolean = false;

    await this.authDb.createUserWithEmailAndPassword(credential.GetEmail(), credential.GetPass())
      .then((userCredential) => {
        // Signed in
        this.userId = userCredential.user?.uid;
        isReg = true;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);     
      });

    return isReg;
  }

  public GetUserId(){
    return this.userId;
  }

  public GetIsAuth():boolean{
    return this.isAuth;
  }

  private async Authenticate(credential: Credential): Promise<boolean>{    
    let isAuth:boolean = false;

    await this.authDb.signInWithEmailAndPassword(credential.GetEmail(), credential.GetPass())
    .then((userCredential) => {
      // Signed in
      this.userId = userCredential.user?.uid;
      isAuth = true;
      //console.log("service: ", userCredential.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);          
    });

    return isAuth;
  }
}