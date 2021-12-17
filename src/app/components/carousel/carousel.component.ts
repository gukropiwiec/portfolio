import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private srcPath = 'assets/icons/';
  public faChevronLeft = faChevronLeft;
  public faChevronRight = faChevronRight;
  public slides = [
    { src: this.srcPath + 'mail-48.png', alt: 'Slide 1', title: 'Slide 1'},
    { src: this.srcPath + 'github-48.png', alt: 'Slide 2', title: 'Slide 2'},
    { src: this.srcPath + 'learn-60.png', alt: 'Slide 3', title: 'Slide 3'}
  ];

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
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3,
        autoplay: false
      },
      940: {
        items: 3,
        autoplay: false
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
