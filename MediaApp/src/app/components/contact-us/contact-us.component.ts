import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted : boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  addPost(form: NgForm){
    this.submitted= true;
    console.log("what is form",form)
    form.resetForm();
  }
}
