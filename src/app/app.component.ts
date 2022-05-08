import { Component } from '@angular/core';
import { LocaldataService } from './services/localdata.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Favorites', url: '/favorites', icon: 'star-outline' }
  ];
  constructor(public localdataSrv: LocaldataService) { }
}
