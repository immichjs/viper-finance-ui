import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSignInComponent } from './authentication/pages/components/form-sign-in/form-sign-in.component';
import { FormSignUpComponent } from './authentication/pages/components/form-sign-up/form-sign-up.component';
import { SignInComponent } from './authentication/pages/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/pages/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormSignInComponent,
    HomeComponent,
    SignUpComponent,
    FormSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
