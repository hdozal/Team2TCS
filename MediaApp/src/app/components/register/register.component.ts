import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  loginRef=new FormGroup({
      fname:new FormControl(),
      lname:new FormControl(),
      user:new FormControl(),
      pass:new FormControl()
    });
    msg:string=""
  constructor() { }

  ngOnInit(): void {
  }
  checkUser() {
     console.log(this.loginRef.value);   // all value
     let user1 = this.loginRef.get("user")?.value;  // get specific control value.
     let pass1 = this.loginRef.get("pass")?.value;
     console.log(user1+" "+pass1);
     localStorage.setItem("user1",user1);
     localStorage.setItem("pass1",pass1);
       this.msg = "Successfully Registered!"

   }

}