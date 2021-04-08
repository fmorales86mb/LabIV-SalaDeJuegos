import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router, private autService: AuthService) { }

  ngOnInit(): void {
  }

  goToQuienSoy():void{
    this.router.navigate(['/quien-soy']);
  }

  goToHome():void{
    this.router.navigate(['/']);
  }

  Logout(){
    this.autService.Desloguearse();
    this.router.navigate(['/login']);
  }
}
