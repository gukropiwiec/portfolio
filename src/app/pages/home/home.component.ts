import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    QueryList,
    ViewChildren
} from '@angular/core';
import { hideAllTooltips } from 'src/app/shared/functions';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { IntersectionObserverService } from 'src/app/services/intersection-observer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy, AfterViewInit {
    faArrowAltCircleRight = faArrowAltCircleRight;
    @ViewChildren('fadeInElement') fadeInElements!: QueryList<ElementRef>;

    constructor(
        private intersectionObserverService: IntersectionObserverService
    ) {}

    ngAfterViewInit() {
        this.fadeInElements.forEach((element) => {
            this.intersectionObserverService.observe(element);
        });
    }

    ngOnDestroy(): void {
        hideAllTooltips();
    }
}
