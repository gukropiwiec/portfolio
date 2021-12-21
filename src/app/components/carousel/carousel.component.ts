import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faExternalLinkAlt, faCode, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'src/app/models/slide.interface';

declare const bootstrap: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() slides: Slide[] = [];

  public faExternalLinkAlt = faExternalLinkAlt;
  public faCode = faCode;
  public faInfo = faInfo;

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="assets/icons/chevron-left-26.png">', '<img src="assets/icons/chevron-right-26.png">'],
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 1000,
    autoplayTimeout: 4000,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4,
        autoplay: false
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.enableTooltips();
  }

  enableTooltips() {
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

  openLink(href: string | undefined) {
    if (!href) {
      return;
    }
    window.open(href, '_blank');
  }
}
