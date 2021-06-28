import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AddNewsComponent } from './addnews/addnews.component';
=======
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SportsComponent } from './components/sports/sports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNewsComponent } from './components/addnews/addnews.component';
>>>>>>> 32392574db3aedf1c450de49293e79b39bb224f0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    HomenavbarComponent,
    FooterComponent,
    SportsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent,
>>>>>>> 32392574db3aedf1c450de49293e79b39bb224f0
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
=======
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
>>>>>>> 32392574db3aedf1c450de49293e79b39bb224f0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
