import { Component, OnInit } from '@angular/core';
import { IThemesInterface } from 'src/app/interfaces/themes.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {

  public themes?: IThemesInterface

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme')

    if (!savedTheme) {
      this.themes = {
        emerald: true,
        gray: false,
        indigo: false,
        purple: false
      }
    } else {
      this.themes = JSON.parse(savedTheme)
    }
  }

  public changeTheme(themes: IThemesInterface) {
    this.themes = themes
  }
}
