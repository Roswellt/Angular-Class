import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  serverIsVisible = true;
  numbers = [];
  counter = 1;
  
  toggleParagraph() {
    this.serverIsVisible = this.serverIsVisible ? false : true;
    this.numbers.push(this.counter++);
  }
 
  getOpacity() {
    return (this.serverIsVisible ? 1 : 0);
  }
}
