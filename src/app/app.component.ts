import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  light = true;
  title = 'pokedex';
  toggle(): void {
    if(this.light === true){
      document.body.className = "dark-theme";
    }
    else{
      document.body.className = "";
    }
    console.log(document.body.className)
    this.light = !this.light;
  }
}
