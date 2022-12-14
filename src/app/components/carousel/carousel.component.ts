import { AfterViewInit, Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from 'src/app/models/project.interface';
import { carouselOptions } from '../../shared/carousel-options';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
    @Input() projectSlides: Project[] | undefined = [];
    @Input() imgSlides: string[] | undefined = [];
    @Input() optionsOverride!: OwlOptions;

    carouselOptions: OwlOptions = {};

    constructor() {}

    ngAfterViewInit(): void {
        this.positionNavs();
        this.carouselOptions = {
            ...carouselOptions,
            ...this.optionsOverride
        };
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
