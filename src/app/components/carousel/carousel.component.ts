import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt, faCode, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'src/app/models/slide.interface';
import { enableTooltips } from 'src/app/shared/functions';
import { carouselOptions } from './carousel-options';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() slides: Slide[] = [];

  carouselOptions = carouselOptions;

  faCode = faCode;
  faExternalLinkAlt = faExternalLinkAlt;
  faInfo = faInfo;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    enableTooltips();
    this.positionNavs();
  }

  openLink(link: string | undefined): void {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }

  positionNavs(): void {
    const navLeftList = document.getElementsByClassName('owl-prev');
    const navRightList = document.getElementsByClassName('owl-next');
    for (let i = 0; i < navLeftList.length; i++) {
      const navLeft = navLeftList[i];
      navLeft.classList.add('nav-left');
    }
    for (let i = 0; i < navRightList.length; i++) {
      const navRight = navRightList[i];
      navRight.classList.add('nav-right');
    }
  }
}
