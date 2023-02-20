import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IThemesInterface } from 'src/app/interfaces/themes.interface';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
})
export class ThemesComponent {
  @Input() themes: any
  @Output() themeChanged: EventEmitter<any> = new EventEmitter()

  public changeTheme(themes: IThemesInterface) {
    localStorage.setItem('theme', JSON.stringify(themes))
    this.themeChanged.emit(themes)
  }
}
