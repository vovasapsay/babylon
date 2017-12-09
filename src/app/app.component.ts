import { Component, AfterViewInit } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    let game = new Game('renderCanvas');
    game.createScene();
    game.animate();
  }

}
