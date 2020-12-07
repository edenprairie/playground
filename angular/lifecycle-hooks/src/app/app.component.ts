import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean;
  title = 'lifecycle-hooks';

  constructor() {
    this.display = true;
  }

  toggle(): void {
    this.display = ! this.display;
  }
}
