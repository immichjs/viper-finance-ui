import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ISignInCredentials } from 'src/app/interfaces/sign-in.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
})
export class FormSignInComponent {

  @Input() themes: any
  public loading: boolean = false
  public signInCredentials: ISignInCredentials = {
    email: '',
    password: ''
  }
  public user?: User;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  signIn() {
    if (!this.signInCredentials.email || !this.signInCredentials.password) {
      window.alert('Preencha todos os campos.')
      return
    }

    this.loading = true
    const user = this.authenticationService.signIn(this.signInCredentials).subscribe(result => result)


    if (!this.user) {
      this.loading = false
      this.signInCredentials.password = ''
      return
    }

    this.signInCredentials.password = ''
    this.signInCredentials.email = ''
    this.loading = false

    this.router.navigate(['/home'])
  }
}
