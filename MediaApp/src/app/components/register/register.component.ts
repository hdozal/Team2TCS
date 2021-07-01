import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPasswordValidator } from './ConfirmPassworValidator';
import {ConfirmEqualValidatorDirective} from './confirm-equal-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;
  submitted = false;

  successMessage: String = '';

  constructor(private _myservice: AuthenticationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group(
      {
      email: ['', [Validators.required,Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
  });
  }

  get fval() { 
    return this.myForm.controls; 
  }


  register() {
    console.log(this.myForm.value);
    this.submitted = true;
    if (this.myForm.valid) {
      this._myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'Registration Failed'
        );
    }
    else{
      return;
    }
  }

  movetologin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}
