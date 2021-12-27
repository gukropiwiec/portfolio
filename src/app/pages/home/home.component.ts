import { Component, OnDestroy, OnInit } from '@angular/core';
import { hideAllTooltips } from 'src/app/shared/functions';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  faArrowAltCircleRight = faArrowAltCircleRight;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    hideAllTooltips();
  }
}
