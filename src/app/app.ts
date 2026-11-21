import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoInternet } from './shared/no-internet/no-internet';

@Component({
  imports: [RouterOutlet, NoInternet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('MoviePlatform');
}
