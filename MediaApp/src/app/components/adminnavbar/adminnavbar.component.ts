import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.location.href =="http://localhost:4200/adminNews"){
      // this.navBarFlag = true;
    localStorage.setItem('navBarFlag', "true");
    }
  }

}
