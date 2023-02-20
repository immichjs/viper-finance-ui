import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ISignInCredentials } from 'src/app/interfaces/sign-in.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
})
export class FormSignInComponent {

  public loading: boolean = false
  public signInCredentials: ISignInCredentials = {
    email: '',
    password: ''
  }
  public user?: User;

  constructor(private readonly authenticationService: AuthenticationService) {}

  signIn() {
    this.loading = true
    const user = this.authenticationService.signIn(this.signInCredentials).subscribe(result => result)
    setTimeout(() => {
      this.loading = false
    }, 5000);
  }
}
