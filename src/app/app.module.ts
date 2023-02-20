import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSignInComponent } from './authentication/pages/components/form-sign-in/form-sign-in.component';
import { ThemesComponent } from './authentication/pages/components/themes/themes.component';
import { SignInComponent } from './authentication/pages/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    FormSignInComponent,
    HomeComponent,
    ThemesComponent
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
