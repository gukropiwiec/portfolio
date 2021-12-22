import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { faExternalLinkAlt, faCode, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'src/app/models/slide.interface';
import { carouselOptions } from './carousel-options';

declare const bootstrap: any;

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
    this.enableTooltips();
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

  private enableTooltips(): void {
    setTimeout(() => {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl, {
          container: 'body',
          offset: '0,3'
        });
      });  
    });
  }
}
