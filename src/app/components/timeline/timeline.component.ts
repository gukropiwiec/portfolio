import { Component } from '@angular/core';
import {
    faChevronDown,
    faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
    faChevronCircleDown = faChevronCircleDown;
    faChevronDown = faChevronDown;

    constructor() {}

    openWorkDetail(workId: string, chevronId: string) {
        document.getElementById(workId)?.classList.toggle('d-none');
        document
            .getElementById(chevronId)
            ?.firstElementChild?.classList.toggle('rotate-chev');
    }
}
