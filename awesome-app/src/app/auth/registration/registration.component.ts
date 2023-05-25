import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      username: this.username,
      password: this.password,
      hobbies: this.fb.array([]),
    });
  }

  get hobbies(): FormArray {
    return this.registrationForm.get('hobbies') as FormArray;
  }

  newHobby() {
    // return new FormControl();
    return this.fb.group({
      name: '',
      frequency: '',
    });
  }

  addNewHobby() {
    this.hobbies.push(this.newHobby());
  }

  removeItem(index) {
    this.hobbies.removeAt(index);
  }

  onRegistration() {
    if (confirm('Are you sure to leave this page?')) {
      console.log(this.registrationForm);
      debugger;
      const { username, password } = this.registrationForm.value;
      this.authService.onUserRegister(username, password);
      return true;
    } else {
      return false;
    }
  }

  onLogin() {
    const { username, password } = this.registrationForm.value;
    this.authService.onUserLogin(username, password);
  }

  static hasExclamation(control: AbstractControl) {
    // console.log(control);
    const hasExcl = control.value.indexOf('!') >= 0;
    return hasExcl ? null : { exclamation: true };
  }
}
