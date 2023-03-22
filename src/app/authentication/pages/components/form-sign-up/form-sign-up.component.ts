import { Component, Input } from '@angular/core';
import { ISignUpCredentials } from 'src/app/interfaces/sign-up.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
})
export class FormSignUpComponent {

  @Input() themes: any

  public loading: boolean = false
  public signUpCredentials: ISignUpCredentials = {
    name: '',
    email: '',
    password: ''
  }
  public user?: User;

  public signUp() {}
}
