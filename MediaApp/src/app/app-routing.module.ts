import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddNewsComponent } from './components/addnews/addnews.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  { 
    path :'aboutUs',
   component: AboutUsComponent
  },
  { 
    path :'contactUs',
     component: ContactUsComponent
  },
  { 
    path :'home',
     component: HomePageComponent
  },
  { 
    path :'sports', 
    component: SportsComponent
  },
  { 
    path :'addNews', 
    component: AddNewsComponent
  },
  { 
    path :'newsList', 
    component: NewslistComponent
  },
  {
    
  path:'adminNews',
  component: AdminnavbarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
