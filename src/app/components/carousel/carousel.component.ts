import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { carouselOptions } from './carousel-options';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() slides: Project[] = [];

  carouselOptions = carouselOptions;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.positionNavs();
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
