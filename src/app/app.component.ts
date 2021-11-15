import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  light = true;
  title = 'pokedex';

/**
 * @method toggle
 * metodo de controle de tema, seja dark ou ligh theme
 */

  toggle(): void {
    this.light = !this.light;
  }
}
