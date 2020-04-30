import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  myNumber = 10;
  flag = true;
  buttonEnabled = false;
  inputValue = 'text';

  blockX=0;
  blockY=0;
  constructor() {
    setTimeout(() => {
      this.buttonEnabled = true;
    }, 1500);
  }

  hello() {
    return 'Hello world';
  }

  getCoords(e: MouseEvent) {
    this.blockX = e.offsetX;
    this.blockY = e.offsetY;
  }
}
