import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My DBZ';
  is_homepage = true;

  changePage() {
    this.is_homepage = false;
  }
}
