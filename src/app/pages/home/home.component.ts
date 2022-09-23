import { Component, OnDestroy } from '@angular/core';
import { hideAllTooltips } from 'src/app/shared/functions';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
    faArrowAltCircleRight = faArrowAltCircleRight;

    constructor() {}

    ngOnDestroy(): void {
        hideAllTooltips();
    }
}
