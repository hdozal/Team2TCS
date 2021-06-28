import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SportsComponent } from './components/sports/sports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    FooterComponent,
    SportsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
