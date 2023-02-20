import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignInCredentials } from '../interfaces/sign-in.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly URL = `http://localhost:3000`

  constructor(private readonly http: HttpClient) { }

  public signIn(signInCredentials: ISignInCredentials) {
    return this.http.post(`${this.URL}/auth/signin`, signInCredentials)
  }
}
