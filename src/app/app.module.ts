import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntoPageComponent } from './into-page/into-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfesoriComponent } from './profesori/profesori.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatstudComponent } from './matstud/matstud.component';
import { AddmatComponent } from './matstud/addmat/addmat.component';
import { ViewComponent } from './matstud/view/view.component';
import { MapStudComponent } from './map-stud/map-stud.component';
import { AuthInterceptorService } from './login/auth-interceptor.service';
import { JocComponent } from './joc/joc.component';
import { SquareComponent } from './joc/square/square.component';
import { DetaliiProfComponent } from './detalii-prof/detalii-prof.component';




@NgModule({
  declarations: [
    AppComponent,
    IntoPageComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,

    MapsComponent,
    FooterComponent,
    ProfesoriComponent,
    MatstudComponent,AddmatComponent, ViewComponent, MapStudComponent, JocComponent, SquareComponent, DetaliiProfComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule,MatIconModule, GoogleMapsModule, HttpClientModule,FormsModule, ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
