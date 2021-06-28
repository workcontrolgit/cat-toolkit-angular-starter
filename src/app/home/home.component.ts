import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Logger} from '@core';

const log = new Logger('App');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1027, 604, 660, 828, 959].map((n) => `https://picsum.photos/id/${n}/1920/1080`);

  constructor() {
  }

  ngOnInit() {

  }
}
