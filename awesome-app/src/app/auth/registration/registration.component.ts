import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    RegistrationComponent.hasExclamation,
  ]);

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: this.username,
      password: this.password,
    });
  }

  onRegistration() {
    console.log(this.registrationForm);
  }

  static hasExclamation(control: AbstractControl) {
    const hasExcl = control.value.indexOf('!') >= 0;
    return hasExcl ? null : { exclamation: true };
  }
}
