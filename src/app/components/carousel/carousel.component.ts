import { AfterViewInit, Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { carouselOptions } from './carousel-options';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
    @Input() slides: Project[] = [];

    carouselOptions = carouselOptions;

    constructor() {}

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
