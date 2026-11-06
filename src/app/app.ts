import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// styleUrl: './app.scss',
// templateUrl: './app.html',
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class App {
  protected readonly title = signal('care-call');
}
