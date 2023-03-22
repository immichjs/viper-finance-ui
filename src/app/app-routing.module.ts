import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './authentication/pages/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/pages/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'authentication/signin', component: SignInComponent },
  { path: 'authentication/signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
