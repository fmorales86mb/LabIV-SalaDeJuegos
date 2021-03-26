import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { ErrorComponent } from './pages/shared/error/error.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule }from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent,
    ErrorComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
