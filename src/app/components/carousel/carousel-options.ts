import { OwlOptions } from "ngx-owl-carousel-o";

export const carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<img src="assets/icons/chevron-left-26.png">',
      '<img src="assets/icons/chevron-right-26.png">'
    ],
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
      }
    }
}